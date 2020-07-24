import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import {ApieleveService} from '../../../service/apieleve.service';
import {ToolsService} from '../../../service/tools.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialog-update-price',
  templateUrl: './dialog-update-price.component.html',
  styleUrls: ['./dialog-update-price.component.scss']
})
export class DialogUpdatePriceComponent implements OnInit {

 
  form : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogUpdatePriceComponent>,
    public eleveService : ApieleveService,
    private tools: ToolsService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit() {

    console.log(this.data)

    this.form = new FormGroup({
      id : new FormControl(this.data.currentElement.id),
      prix : new FormControl(this.data.currentElement.prix, [Validators.required]), 
    });

  }

  onNoClick(): void {
    this.dialogRef.close('KO');
  }

  submit(form){
    this.eleveService.updatePrice(form.value).subscribe(
      (data) => console.log('data'),
      (error) => {
        this.tools.openSnackBar("Le prix n'a pas pu être mis à jour'!",'failed');
        console.log(error);
      },
      () => {
        this.tools.openSnackBar("Le prix a bien été mis à jour'!", 'sucess');
        this.dialogRef.close()
      }
    );
  }

}
