import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {ApieleveService} from '../../../service/apieleve.service';
import { ToolsService} from '../../../service/tools.service';




@Component({
  selector: 'app-admin-add-group',
  templateUrl: './admin-add-group.component.html',
  styleUrls: ['./admin-add-group.component.scss']
})
export class AdminAddGroupComponent implements OnInit {


  form : FormGroup;
  matieres = ['Mathématiques', 'Physique'];
  tailles = ['Petit', 'Moyen', 'Grand'];
  niveaux = ['1 ere', '2 eme', '3 eme']; 

  constructor(
    public dialogRef: MatDialogRef<AdminAddGroupComponent>,
    public eleveService : ApieleveService,
    private tools: ToolsService


  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      matiere : new FormControl('', [Validators.required, Validators.maxLength(15)]), 
      label :new FormControl('', [Validators.required, Validators.maxLength(15)]), 
      type : new FormControl('', [Validators.required, Validators.maxLength(12)]),
      niveau : new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  submit(form){
    this.eleveService.addNewGroup(form.value).subscribe(
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
