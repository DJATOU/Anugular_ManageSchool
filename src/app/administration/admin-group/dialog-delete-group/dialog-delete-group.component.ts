import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog-delete-group',
  templateUrl: './dialog-delete-group.component.html',
  styleUrls: ['./dialog-delete-group.component.scss']
})
export class DialogDeleteGroupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data);
  } 

  closeDialog() {
    this.dialogRef.close();
  }

}
