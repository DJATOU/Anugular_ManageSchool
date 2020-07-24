import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import {ApieleveService} from '../../../service/apieleve.service';
import { ToolsService} from '../../../service/tools.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-dialog-update-group',
  templateUrl: './dialog-update-group.component.html',
  styleUrls: ['./dialog-update-group.component.scss']
})
export class DialogUpdateGroupComponent implements OnInit {

  form : FormGroup;
  matieres = ['Mathématiques', 'Physique'];
  tailles = ['Petit', 'Moyen', 'Grand'];
  niveaux = ['1 ere', '2 eme', '3 eme']; 

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateGroupComponent>,
    public eleveService : ApieleveService,
    private tools: ToolsService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit() {

    console.log(this.data)
    this.form = new FormGroup({
      id : new FormControl(this.data.currentElement.id), 
      matiere : new FormControl(this.data.currentElement.matiere, [Validators.required, Validators.maxLength(15)]), 
      label :new FormControl(this.data.currentElement.label, [Validators.required, Validators.maxLength(15)]), 
      type : new FormControl(this.data.currentElement.type, [Validators.required, Validators.maxLength(12)]),
      niveau : new FormControl(this.data.currentElement.niveau, [Validators.required, Validators.maxLength(30)]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  submit(form){
    this.eleveService.updateGroup(form.value).subscribe(
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
