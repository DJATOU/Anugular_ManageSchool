import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-confirm-inscription',
  templateUrl: './dialog-confirm-inscription.component.html',
  styleUrls: ['./dialog-confirm-inscription.component.scss']
})
export class DialogConfirmInscriptionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmInscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

}
