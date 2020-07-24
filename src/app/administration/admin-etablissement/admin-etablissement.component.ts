import { Component, OnInit } from '@angular/core';
import {ApieleveService} from '../../service/apieleve.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import {DialogAddEtablissementComponent} from './dialog-add-etablissement/dialog-add-etablissement.component'
import {DialogDeleteEtablissementComponent} from './dialog-delete-etablissement/dialog-delete-etablissement.component'
import {ToolsService} from '../../service/tools.service';
import {DialogUpdateEtablissementComponent} from './dialog-update-etablissement/dialog-update-etablissement.component'

@Component({
  selector: 'app-admin-etablissement',
  templateUrl: './admin-etablissement.component.html',
  styleUrls: ['./admin-etablissement.component.scss']
})
export class AdminEtablissementComponent implements OnInit {

  displayedColumns: string[] = ["Nom de l'établissement", 'Adresse', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource();
  allEtab = [];
 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public eleveService : ApieleveService,
    private dialog: MatDialog,
    private tools: ToolsService,


  ) { }

  ngOnInit() {
    this.eleveService.getAllEtablissements().subscribe((response) => {
      console.log(response);
      this.allEtab = response;
      this.dataSource = new MatTableDataSource(this.allEtab);
    },
    (err) => console.log(err),
    )}

    openDialogEtablissement(){
      this.dialog.open(DialogAddEtablissementComponent).afterClosed().subscribe((res) => console.log(res),
      (err) => console.log(err),
      () => this.ngOnInit())
    }

    deleteEtab(id: string) {
      this.eleveService.deleteEtablissement(id).subscribe(
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

    openModalDeleteStudent(currentElement: any): void {
      this.dialog.open(DialogDeleteEtablissementComponent, { data : {
        currentElement
      }}).afterClosed().subscribe( (res) => {
        if (res) {
          this.deleteEtab(currentElement.id);
          console.log(res)
        }
      },
      (err) => console.log(err),
      () => console.log('complete'));
    }

    openModalUpdateStudent(currentElement: any): void {
      this.dialog.open(DialogUpdateEtablissementComponent, { data : {
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
}
