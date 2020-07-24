import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,Validators, FormControl} from '@angular/forms';
import {Eleve} from '../../../model/eleve';
import { HttpClient} from '@angular/common/http';
import { ApieleveService } from 'src/app/service/apieleve.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogFormTuteurComponent} from '../dialog-form-tuteur/dialog-form-tuteur.component';
import { Router } from '@angular/router';
import 'rxjs';
import {ToolsService} from '../../../service/tools.service'

@Component({
  selector: 'app-dialog-update-student',
  templateUrl: './dialog-update-student.component.html',
  styleUrls: ['./dialog-update-student.component.scss']
})
export class DialogUpdateStudentComponent implements OnInit {

  etablissements : any = [];
  tuteurs : any = [];
  annees : any = [];
  dateOK : boolean;
  form : FormGroup;
  errorAddStudent : Boolean = false;
  errorMsg : string ;
  currentUser : any;
  eleve : any;

  constructor( 
    private http : HttpClient,
    private eleveService : ApieleveService,
    public dialog: MatDialog,
    private tools : ToolsService,
    private router : Router,
    public dialogRef: MatDialogRef<DialogFormTuteurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 

    ) {}

  ngOnInit() {
    this.eleveService.getDetailsStudent(this.data.currentElement.id).subscribe((response) => {
      this.eleve = response[0];
      console.log(this.eleve)
      this.form = new FormGroup({
        nom : new FormControl(this.data.currentElement.nom, [Validators.required, Validators.maxLength(15)]), 
        prenom :new FormControl(this.data.currentElement.prenom, [Validators.required, Validators.maxLength(15)]), 
        dateNaissance : new FormControl(new Date(this.data.currentElement.datenaissance), [Validators.required]), 
        lieuNaissance : new FormControl(this.data.currentElement.lieunaissance, [Validators.required]),
        numeroTel : new FormControl(this.data.currentElement.coordonnees.telephone, [Validators.required, Validators.maxLength(12)]),
        email : new FormControl(this.data.currentElement.coordonnees.email, [Validators.required, Validators.email, Validators.maxLength(30)]),
        tuteur : new FormControl(this.data.currentElement.tuteur, [Validators.required]),
        annee_scolaire : new FormControl(this.data.currentElement.annee_scolaire, [Validators.required]),
        etablissement : new FormControl(this.data.currentElement.etablissement, [Validators.required]),
        niveau : new FormControl(this.data.currentElement.niveau, [Validators.required]),
        moyenne :new FormControl(this.eleve.moyenne, [Validators.required, Validators.max(20)]),
        idDb : new FormControl(this.data.currentElement.id)
      });
    });
    this.eleveService.getAllAnnes().subscribe( (response) => this.annees = response);
    this.eleveService.getAllEtablissements().subscribe( (response) => this.etablissements = response);
    this.eleveService.getAllTuteurs().subscribe((response) => this.tuteurs = response);
    this.errorAddStudent = false;
    // console.log(this.data)

    this.eleveService.getDetailsStudent(this.data.currentElement.id).subscribe((response) => {
      this.currentUser = response;
      console.log(this.currentUser)
    },
    (err) => console.log(err));



  }

  submit(form){
    console.log(form.value)
    let eleve = new Eleve( 
      form.get('nom').value,
      form.get('prenom').value,
      form.get('dateNaissance').value.toDateString(),
      form.get('lieuNaissance').value,
      form.get('numeroTel').value,
      form.get('email').value,
      form.get('tuteur').value.id,
      form.get('annee_scolaire').value.id,
      form.get('etablissement').value.id,
      form.get('niveau').value,
      form.get('moyenne').value,
      form.get('idDb').value,
    );
    console.log(eleve);

    this.eleveService.updateStudent(eleve).subscribe(
     ( data => {
        console.log('Data');
      }),
      error => {
        this.errorMsg = error.message;
        this.errorAddStudent = true;
        this.tools.openSnackBar("L'élève n'a pas pu etre ajouté !");
        console.log(error);
      },
      () => {
        this.tools.openSnackBar('Eleve enregistré !');
        this.dialogRef.close()
      });
}

  openModalTuteur(): void {
    const dialogRef = this.dialog.open(DialogFormTuteurComponent).afterClosed().subscribe((response) => {
      this.eleveService.getAllTuteurs().subscribe((response) => this.tuteurs = response);
    });
}

  closeDialog() : void {
    this.dialogRef.close();
  }

}
