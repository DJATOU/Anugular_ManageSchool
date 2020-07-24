import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog-delete-student',
  templateUrl: './dialog-delete-student.component.html',
  styleUrls: ['./dialog-delete-student.component.scss']
})
export class DialogDeleteStudentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit() {
    console.log(this.data);
  } 

  closeDialog() {
    this.dialogRef.close();
  }

}
