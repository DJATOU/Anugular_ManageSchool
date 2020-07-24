import { Component, OnInit } from '@angular/core';
import {ApieleveService} from '../../../service/apieleve.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import {ToolsService} from '../../../service/tools.service';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-dialog-add-prof',
  templateUrl: './dialog-add-prof.component.html',
  styleUrls: ['./dialog-add-prof.component.scss']
})

export class DialogAddProfComponent implements OnInit {
  
  form : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAddProfComponent>,
    public eleveService : ApieleveService,
    private tools: ToolsService
  ) { }
  ngOnInit() {

    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required, Validators.maxLength(30)]), 
      prenom :new FormControl('', [Validators.required, Validators.maxLength(30)]), 
      dateNaissance :new FormControl('', [Validators.maxLength(30)]), 
      lieuNaissance :new FormControl('', [Validators.required, Validators.maxLength(30)]), 
      telephone :new FormControl('', [Validators.required, Validators.maxLength(30)]), 
      email :new FormControl('', [Validators.required,Validators.email,Validators.maxLength(30)]), 
    });
  }

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  submit(form){
    console.log(form.value)
    this.eleveService.addProf(form.value).subscribe(
      (data) => console.log('data'),
      (error) => {
        this.tools.openSnackBar("Le professeur n'a pas pu etre ajouté au groupe'!",'failed');
        console.log(error);
      },
      () => {
        this.tools.openSnackBar("Le professeur a bien été ajouté à un groupe'!", 'sucess');
        this.dialogRef.close()
      }
    );
  }

}
