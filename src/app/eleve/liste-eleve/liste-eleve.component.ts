import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApieleveService } from 'src/app/service/apieleve.service';
import {MatTableDataSource, MatPaginator, MatDialog} from '@angular/material';
import { Observable, of } from 'rxjs';
import { ToolsService } from 'src/app/service/tools.service';
import {DialogUpdateStudentComponent} from '../inscription/dialog-update-student/dialog-update-student.component';
import {DialogDeleteStudentComponent} from '../dialogs-eleve/dialog-delete-student/dialog-delete-student.component';
import {SelectionModel} from '@angular/cdk/collections';
import {DialogDeleteStudentsComponent} from '../dialogs-eleve/dialog-delete-students/dialog-delete-students.component';
import {DialogAddGroupComponent} from '../dialogs-eleve/dialog-add-group/dialog-add-group.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-eleve',
  templateUrl: './liste-eleve.component.html',
  styleUrls: ['./liste-eleve.component.scss']
})

@Injectable()
export class ListeEleveComponent implements OnInit {

  students: any = [];
  displayedColumns: string[] = ['select', 'Nom', 'Prénom', 'Email',
  'Téléphone', 'Editer', 'Supprimer', 'Groupe', 'Détail'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  multipleDelete = false;

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient,
              private eleveService: ApieleveService,
              private tools: ToolsService,
              private dialog: MatDialog,
              private router: Router) {}

  ngOnInit() {
    this.eleveService.getStudents().then(() => {
      this.students = this.eleveService.students.filter(element => element.actif === true);
      console.log(this.students);
      this.dataSource = new MatTableDataSource(this.students);
      this.dataSource.paginator = this.paginator;
    });
  }

  multipleDeleteStudents() {
    const numSelected = this.selection.selected.length;
    if (numSelected > 0) {
      this.multipleDelete = true;
    } else {
      this.multipleDelete = false;
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  deleteStudent(id: string) {
    this.eleveService.deleteStudent(id).subscribe(
      (response) => {
        console.log(response);
        this.multipleDelete = false;
      },
      (err) => {
        console.log( 'error' + err);
        this.tools.openSnackBar('Erreur lors de la supression', 'failed');
      },
      () => {
        this.ngOnInit();
        this.tools.openSnackBar('L élève a bien été supprimé !', 'sucess');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  connect(): Observable<Element[]> {
    const rows = [];
    this.students.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  openModalAddGroup(currentElement: any): void{
    this.dialog.open( DialogAddGroupComponent, { data : {
      currentElement
    }}).afterClosed().subscribe( (res) => console.log(res),
    (err) => console.log(err),
    () => this.ngOnInit());
  }
  
  openModalEditStudent(currentElement: any): void {
    this.dialog.open(DialogUpdateStudentComponent, {   height: '80%',
    width: '70%',
    data : {
      currentElement,
    }}).afterClosed().subscribe( (res) => console.log(res),
    (err) => console.log(err),
    () => this.ngOnInit());
  }

  openModalDeleteStudent(currentElement: any): void {
    this.dialog.open(DialogDeleteStudentComponent, { data : {
      currentElement
    }}).afterClosed().subscribe( (res) => {
      if (res) {
        this.deleteStudent(currentElement.id);
      }
    },
    (err) => console.log(err),
    () => console.log('complete'));
  }

  openModalDeleteStudents() {
    this.dialog.open(DialogDeleteStudentsComponent, {
      data : this.selection.selected
    }).afterClosed().subscribe( (res) => {
      if (res) {
        this.selection.selected.forEach(element => {
          this.deleteStudent(element.id);
          this.ngOnInit();
        });
        this.selection.clear();
      }
    });
  }

  goToStudentDetails(id: string) {
    console.log(id);
    this.router.navigate(['/aboutStudent/:', {id}]);
  }

  goToGroupsOfStudent(id: string) {
    this.router.navigate(['GroupofEleve/:', {id}]);
  }
}
