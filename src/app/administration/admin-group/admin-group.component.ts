import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator, MatDialog} from '@angular/material';
import {ApieleveService} from '../../service/apieleve.service';
import {AdminAddGroupComponent} from './admin-add-group/admin-add-group.component'
import {DialogUpdateGroupComponent} from './dialog-update-group/dialog-update-group.component'
import {DialogDeleteGroupComponent} from './dialog-delete-group/dialog-delete-group.component'

@Component({
  selector: 'app-admin-group',
  templateUrl: './admin-group.component.html',
  styleUrls: ['./admin-group.component.scss']
})
export class AdminGroupComponent implements OnInit {

  displayedColumns: string[] = ['Nom du groupe', 'Matière', 'Niveau','Taille', 'Modifier', 'Supprimer'];
  dataSource = new MatTableDataSource();
  allGroups = []

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private eleveService : ApieleveService,
    private route : ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.eleveService.getAllGroups().subscribe((res) => {
      this.allGroups = res.filter(element => element.actif === true);
      console.log(this.allGroups)
      this.dataSource = new MatTableDataSource(this.allGroups);
    }, 
    (err) => console.log(err)
    )}

    openDialogAddGroup(){
      this.dialog.open(AdminAddGroupComponent).afterClosed().subscribe((res) => console.log(res),
      (err) => console.log(err),
      () => this.ngOnInit())
    }

    openDialogUpdateGroup(currentElement: any){
      this.dialog.open(DialogUpdateGroupComponent, { data : {
        currentElement
      }}).afterClosed().subscribe((res) => console.log(res),
      (err) => console.log(err),
      () => this.ngOnInit())
    }

    openDialogDeleteGroup(currentElement: any){
      this.dialog.open(DialogDeleteGroupComponent, { data : {
        currentElement
      }}).afterClosed().subscribe((res) => {
        if(res) {
          console.log('OK')
          console.log(currentElement.id)
          this.eleveService.deleteGroup(currentElement.id).subscribe((res) => console.log(res),
          (err) => console.log(err));
          this.ngOnInit();
        }
      },
      (err) => console.log(err),
      () => this.ngOnInit())
    }

}
