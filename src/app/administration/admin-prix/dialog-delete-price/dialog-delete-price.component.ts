import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialog-delete-price',
  templateUrl: './dialog-delete-price.component.html',
  styleUrls: ['./dialog-delete-price.component.scss']
})
export class DialogDeletePriceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeletePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {

    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
