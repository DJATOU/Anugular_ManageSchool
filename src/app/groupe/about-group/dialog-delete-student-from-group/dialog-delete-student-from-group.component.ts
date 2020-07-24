import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-delete-student-from-group',
  templateUrl: './dialog-delete-student-from-group.component.html',
  styleUrls: ['./dialog-delete-student-from-group.component.scss']
})
export class DialogDeleteStudentFromGroupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteStudentFromGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data);
  } 

  closeDialog() {
    this.dialogRef.close();
  }

}
