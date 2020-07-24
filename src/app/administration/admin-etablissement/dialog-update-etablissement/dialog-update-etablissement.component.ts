import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import {ApieleveService} from '../../../service/apieleve.service';
import {ToolsService} from '../../../service/tools.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-update-etablissement',
  templateUrl: './dialog-update-etablissement.component.html',
  styleUrls: ['./dialog-update-etablissement.component.scss']
})
export class DialogUpdateEtablissementComponent implements OnInit {


  form : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateEtablissementComponent>,
    public eleveService : ApieleveService,
    private tools: ToolsService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit() {

    console.log(this.data)

    this.form = new FormGroup({
      id : new FormControl(this.data.currentElement.id),
      nom : new FormControl(this.data.currentElement.nom, [Validators.required, Validators.maxLength(30)]), 
      adresse :new FormControl(this.data.currentElement.adresse, [Validators.required, Validators.maxLength(30)]), 

    });

  }

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  submit(form){
    this.eleveService.updateEtablissement(form.value).subscribe(
      (data) => console.log('data'),
      (error) => {
        this.tools.openSnackBar("L'établissement n'a pas pu etre mis à jour'!",'failed');
        console.log(error);
      },
      () => {
        this.tools.openSnackBar("L'établissement a bien été mis à jour'!", 'sucess');
        this.dialogRef.close()
      }
    );
  }

}
