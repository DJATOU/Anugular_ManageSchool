import { Component, OnInit } from '@angular/core';
import {ApieleveService} from '../../service/apieleve.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import {ToolsService} from '../../service/tools.service';
import {DialogDeletePriceComponent} from './dialog-delete-price/dialog-delete-price.component';
import {DialogUpdatePriceComponent} from './dialog-update-price/dialog-update-price.component';
import {DialogAddPriceComponent} from './dialog-add-price/dialog-add-price.component';

@Component({
  selector: 'app-admin-prix',
  templateUrl: './admin-prix.component.html',
  styleUrls: ['./admin-prix.component.scss']
})
export class AdminPrixComponent implements OnInit {

  displayedColumns: string[] = ["Prix", 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource();
  allPrices = [];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public eleveService : ApieleveService,
    private dialog: MatDialog,
    private tools: ToolsService,  ) { }

  ngOnInit() {
    this.eleveService.getAllPrices().subscribe((res) => {
      console.log(res);
      this.allPrices = res;
      this.dataSource = new MatTableDataSource(this.allPrices);

    }, 
    (err) => console.log(err))
  }

  deletePrice(id: string) {
    this.eleveService.deletePrice(id).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log( 'error' + err);
        this.tools.openSnackBar('Erreur lors de la supression', 'failed');
      },
      () => {
        this.ngOnInit();
        this.tools.openSnackBar('L établissement a bien été supprimé !', 'sucess');
    });
  }

  openModalDeletePrice(currentElement: any): void {
    this.dialog.open(DialogDeletePriceComponent, { data : {
      currentElement
    }}).afterClosed().subscribe( (res) => {
      if (res) {
        this.deletePrice(currentElement.id);
        console.log(res)
      }
    },
    (err) => console.log(err),
    () => console.log('complete'));
  }

  openModalUpdatePrice(currentElement: any): void {
    this.dialog.open(DialogUpdatePriceComponent, { data : {
      currentElement
    }}).afterClosed().subscribe( (res) => {
      if (res) {
        console.log(res)
      }
    },
    (err) => console.log(err),
    () => {
      console.log('complete');
      this.ngOnInit();
      });
  }

  openDialogAddPrice(){
    this.dialog.open(DialogAddPriceComponent).afterClosed().subscribe((res) => console.log(res),
    (err) => console.log(err),
    () => this.ngOnInit())
  }

}
