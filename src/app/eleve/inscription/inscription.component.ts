import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl} from '@angular/forms';
import {Eleve} from '../../model/eleve';
import { HttpClient} from '@angular/common/http';
import { ApieleveService } from 'src/app/service/apieleve.service';
import {MatDialog} from '@angular/material';
import {DialogFormTuteurComponent} from './dialog-form-tuteur/dialog-form-tuteur.component';
import { Router } from '@angular/router';
import 'rxjs';
import {ToolsService} from '../../service/tools.service';
import { DialogConfirmInscriptionComponent} from './dialog-confirm-inscription/dialog-confirm-inscription.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  etablissements: any = [];
  tuteurs: any = [];
  annees: any = [];
  dateOK: boolean;
  form: FormGroup;
  errorAddStudent = false;
  errorMsg: string ;
  maxDate = new Date();
  minDate = new Date(1990, 0, 1);
  
  constructor(
    private http: HttpClient,
    private eleveService: ApieleveService,
    public dialog: MatDialog,
    private tools: ToolsService,
    private router: Router
    ) {}

  ngOnInit() {

    this.eleveService.getAllAnnes().subscribe( (response) => this.annees = response);
    this.eleveService.getAllEtablissements().subscribe( (response) => this.etablissements = response);
    this.eleveService.getAllTuteurs().subscribe((response) => this.tuteurs = response);
    this.errorAddStudent = false;

    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required, Validators.maxLength(15)]),
      prenom : new FormControl('', [Validators.required, Validators.maxLength(15)]),
      dateNaissance : new FormControl('', [Validators.required]),
      lieuNaissance : new FormControl('', [Validators.required, Validators.maxLength(20)]),
      numeroTel : new FormControl('', [Validators.required, Validators.maxLength(12)]),
      email : new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
      tuteur : new FormControl('', [Validators.required]),
      annee_scolaire : new FormControl('', [Validators.required]),
      etablissement : new FormControl('', [Validators.required]),
      niveau : new FormControl('', [Validators.required]),
      moyenne : new FormControl('', [Validators.required, Validators.max(20)]),
    });
  }

  submit(form) {

    this.dialog.open(DialogConfirmInscriptionComponent, {data : form.value} ).afterClosed().subscribe( (res) => {
        if (res === true) {
          const eleve = new Eleve(
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
            form.get('moyenne').value
          );
          console.log(eleve);
          this.eleveService.postStudent(eleve).subscribe(
           ( data => {
              console.log('Data');
            }),
            error => {
              this.errorMsg = error.message;
              this.errorAddStudent = true;
              this.tools.openSnackBar("L'élève n'a pas pu etre ajouté !",'failed');
              console.log(error);
            },
            () => {
              this.tools.openSnackBar('Eleve enregistré !', 'sucess');
              this.router.navigate(['/ListStudents']);
            });
      } else { this.dialog.closeAll(); }});


}

  openModalTuteur(): void {
    const dialogRef = this.dialog.open(DialogFormTuteurComponent).afterClosed().subscribe((response) => {
      this.eleveService.getAllTuteurs().subscribe((response) => this.tuteurs = response);
    });
}

  openModalConfirmation(): void {
    this.dialog.open(DialogConfirmInscriptionComponent).afterClosed().subscribe( (res) => console.log(typeof res));
  }

}
