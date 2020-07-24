import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import {ApieleveService} from '../../../service/apieleve.service';
import {ToolsService} from '../../../service/tools.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-add-price',
  templateUrl: './dialog-add-price.component.html',
  styleUrls: ['./dialog-add-price.component.scss']
})
export class DialogAddPriceComponent implements OnInit {

  form : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAddPriceComponent>,
    public eleveService : ApieleveService,
    private tools: ToolsService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      prix : new FormControl('', [Validators.required]), 
    });

  }

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  submit(form){
    this.eleveService.addPrice(form.value).subscribe(
      (data) => console.log('data'),
      (error) => {
        this.tools.openSnackBar("Le prix n'a pas pu être ajouté!",'failed');
        console.log(error);
      },
      () => {
        this.tools.openSnackBar("Le prix a bien été ajouté'!", 'sucess');
        this.dialogRef.close()
      }
    );
  }

}
