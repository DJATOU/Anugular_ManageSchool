import { Component, OnInit } from '@angular/core';
import {ApieleveService} from '../../service/apieleve.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import {ToolsService} from '../../service/tools.service';
import {DialogAddProfComponent} from './dialog-add-prof/dialog-add-prof.component'
import { DialogDeleteProfComponent } from './dialog-delete-prof/dialog-delete-prof.component';


@Component({
  selector: 'app-admin-prof',
  templateUrl: './admin-prof.component.html',
  styleUrls: ['./admin-prof.component.scss']
})
export class AdminProfComponent implements OnInit {

  displayedColumns: string[] = ["Nom", 'Prenom', 'Email', 'Téléphone', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource();
  allProf : any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public eleveService : ApieleveService,
    private dialog: MatDialog,
    private tools: ToolsService,


  ) { }

  ngOnInit() {
    this.eleveService.getAllProf().subscribe((res) => {
      this.allProf = res;
      console.log(this.allProf)
      this.dataSource = new MatTableDataSource(this.allProf);


    },
    (err) => console.log(err));
  }

  openDialogAddProf(){
    this.dialog.open(DialogAddProfComponent).afterClosed().subscribe((res) => console.log(res),
    (err) => console.log(err),
    () => this.ngOnInit())
  }


  deleteProfesseur(id: string) {
    this.eleveService.deleteProf(id).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log( 'error' + err);
        this.tools.openSnackBar('Erreur lors de la supression', 'failed');
      },
      () => {
        this.ngOnInit();
        this.tools.openSnackBar('Le professeur a bien été supprimé !', 'sucess');
    });
  }
  
  openModalDeleteProf(currentElement: any): void {
    this.dialog.open(DialogDeleteProfComponent, { data : {
      currentElement
    }}).afterClosed().subscribe( (res) => {
      if (res) {
        console.log(res);
        this.deleteProfesseur(currentElement.id)
      }
    },
    (err) => console.log(err),
    () => console.log('complete'));
  }

}
