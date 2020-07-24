import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {ApieleveService} from '../../../service/apieleve.service';
import {ToolsService} from '../../../service/tools.service'

@Component({
  selector: 'app-dialog-add-etablissement',
  templateUrl: './dialog-add-etablissement.component.html',
  styleUrls: ['./dialog-add-etablissement.component.scss']
})
export class DialogAddEtablissementComponent implements OnInit {


  form : FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogAddEtablissementComponent>,
    public eleveService : ApieleveService,
    private tools: ToolsService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required, Validators.maxLength(30)]), 
      adresse :new FormControl('', [Validators.required, Validators.maxLength(30)]), 

    });
  }

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  submit(form){
    this.eleveService.addEtablissement(form.value).subscribe(
      (data) => console.log('data'),
      (error) => {
        this.tools.openSnackBar("L'eleve n'a pas pu etre ajouté au groupe'!",'failed');
        console.log(error);
      },
      () => {
        this.tools.openSnackBar("L'éléve a bien été ajouté à un groupe'!", 'sucess');
        this.dialogRef.close()
      }
    );
  }

}
