import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog-delete-students',
  templateUrl: './dialog-delete-students.component.html',
  styleUrls: ['./dialog-delete-students.component.scss']
})
export class DialogDeleteStudentsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    console.log(this.data);
  }

}
