import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ApieleveService} from '../../service/apieleve.service';
import { ActivatedRoute } from '@angular/router';
import {DialogAddGroupComponent} from '../dialogs-eleve/dialog-add-group/dialog-add-group.component';
import {MatPaginator, MatDialog} from '@angular/material';



@Component({
  selector: 'app-group-eleve',
  templateUrl: './group-eleve.component.html',
  styleUrls: ['./group-eleve.component.scss']
})
export class GroupEleveComponent implements OnInit {

  groups : any[];
  displayedColumns: string[] = ['Nom du groupe', 'Matière', 'Niveau','Taille','Date de début', 'Date de fin','Prix','Cloturer'];
  dataSource = new MatTableDataSource();
  id : string;
  student: any;
  groupsLength : number;
  
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
    this.eleveService.getDetailsStudent(this.id).subscribe((response) => {
      this.student = response[0];
      console.log(this.student);
    },
    (err) => console.log(err));

    this.eleveService.getGroupsOfEleve(this.id).then(() => {
      console.log(this.eleveService.groupsofEleve)
      this.groups = this.eleveService.groupsofEleve;
      console.log(this.groups);
      this.groupsLength = this.groups.length;
      this.dataSource = new MatTableDataSource(this.groups);
    });
  }


  openModalAddGroup(id: string): void{
    this.dialog.open( DialogAddGroupComponent, { data : {
      id
    }}).afterClosed().subscribe( (res) => console.log(res),
    (err) => console.log(err),
    () => this.ngOnInit());
  }

}
