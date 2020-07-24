import { Component, OnInit } from '@angular/core';
import {ApieleveService} from '../../service/apieleve.service';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {DialogDeleteStudentFromGroupComponent} from './dialog-delete-student-from-group/dialog-delete-student-from-group.component'
import {MatPaginator, MatDialog} from '@angular/material';



@Component({
  selector: 'app-about-group',
  templateUrl: './about-group.component.html',
  styleUrls: ['./about-group.component.scss']
})
export class AboutGroupComponent implements OnInit {

  id : string;
  eleves : any = [];
  displayedColumns: string[] = ['Nom', 'Prénom', 'dateNaissance','Téléphone','Email', 'Retirer'];
  dataSource = new MatTableDataSource();
  eleveLength : Number;
  groups : any[];
  groupsLength : any;
  currentGroup : any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private eleveService : ApieleveService,
    private route : ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.eleveService.getGroupById(this.id).subscribe((response) => {
      console.log(response);
      this.currentGroup = response[0];
      console.log(this.currentGroup)
    },
    (err) => console.log(err));

    this.eleveService.getEleveOfGroup(this.id).then(() => {
      console.log(this.eleveService.eleveOfGroup)
      this.groups = this.eleveService.eleveOfGroup;
      this.groupsLength = this.groups.length;
      this.dataSource = new MatTableDataSource(this.groups);
    });
  };

  openModalDeleteStudentFromGroup(currentElement : any){
    this.dialog.open(DialogDeleteStudentFromGroupComponent, { data : {
      element : currentElement,
      idGroup : this.id
    }}).afterClosed().subscribe((res) => {
      if(res) {
        console.log('OK')
        this.eleveService.deleteStudentFromGroup(this.id, currentElement.id).subscribe((res) => {
          this.ngOnInit();
        },
        (err) => console.log(err)); 
        console.log('OK')
      }
    }, 
    (err) => console.log(err));
  }

}
