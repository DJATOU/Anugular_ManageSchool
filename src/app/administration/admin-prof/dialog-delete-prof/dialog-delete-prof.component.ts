import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialog-delete-prof',
  templateUrl: './dialog-delete-prof.component.html',
  styleUrls: ['./dialog-delete-prof.component.scss']
})
export class DialogDeleteProfComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteProfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {

    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
