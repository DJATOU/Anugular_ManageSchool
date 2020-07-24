import { Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Tuteur} from '../../../model/tuteur';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ApieleveService} from '../../../service/apieleve.service';
import {ToolsService} from '../../../service/tools.service';




@Component({
  selector: 'app-dialog-form-tuteur',
  templateUrl: './dialog-form-tuteur.component.html',
  styleUrls: ['./dialog-form-tuteur.component.scss']
})
export class DialogFormTuteurComponent implements OnInit {

  form : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogFormTuteurComponent>,
    public http : HttpClient,
    public tuteurService : ApieleveService,
    private tools : ToolsService 

    ) {}

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  ngOnInit() {
    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required, Validators.maxLength(15)]), 
      prenom :new FormControl('', [Validators.required, Validators.maxLength(15)]), 
      numeroTel : new FormControl('', [Validators.required, Validators.maxLength(12)]),
      email : new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
    });
  }
  submit(form){
    let tuteur = new Tuteur(
      form.get('nom').value,
      form.get('prenom').value,
      form.get('numeroTel').value,
      form.get('email').value
    );
    console.log(tuteur);
    this.tuteurService.postTuteur(tuteur).subscribe(
      (data) => console.log('data'),
      (error) => {
        this.tools.openSnackBar("Le tuteur n'a pas été enregistré !",'failed');
        console.log(error);
      },
      () => {
        this.tools.openSnackBar("Le tuteur a bien été enregistré !", 'sucess');
      }
    );
    this.dialogRef.close('OK');
  }

}
