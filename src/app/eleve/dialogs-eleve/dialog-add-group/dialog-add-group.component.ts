import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ApieleveService} from '../../../service/apieleve.service';
import { FormGroup,Validators, FormControl} from '@angular/forms';
import { ToolsService} from '../../../service/tools.service';


@Component({
  selector: 'app-dialog-add-group',
  templateUrl: './dialog-add-group.component.html',
  styleUrls: ['./dialog-add-group.component.scss']
})
export class DialogAddGroupComponent implements OnInit {

  tarifs: any = [];
  groupes: any = [];
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eleveService: ApieleveService,
    public dialogRef: MatDialogRef<DialogAddGroupComponent>,
    private tools: ToolsService
  ) { }

  ngOnInit() {
    console.log(this.data);

    this.eleveService.getAllTarifs().subscribe((response) => {
      this.tarifs = response;
      console.log(this.tarifs);
    });

    this.eleveService.getAllGroups().subscribe((response) => {
      this.groupes = response;
      console.log(this.groupes);
    });

    this.form = new FormGroup({
      idDb : new FormControl(this.data.id),
      groupe : new FormControl('', [Validators.required]),
      tarif : new FormControl('', [Validators.required]),
      dateDebut : new FormControl('', [Validators.required])
    });
  }

  submit(form){
    console.log(form.value);
    this.eleveService.postStudenttoGroup(form.value).subscribe(
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

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

}
