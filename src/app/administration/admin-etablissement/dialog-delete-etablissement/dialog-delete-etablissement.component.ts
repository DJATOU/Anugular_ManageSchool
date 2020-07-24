import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialog-delete-etablissement',
  templateUrl: './dialog-delete-etablissement.component.html',
  styleUrls: ['./dialog-delete-etablissement.component.scss']
})
export class DialogDeleteEtablissementComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteEtablissementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {

    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
