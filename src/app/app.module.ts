import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EleveService } from './service/eleve.service';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './eleve/inscription/inscription.component';
import { ListeEleveComponent } from './eleve/liste-eleve/liste-eleve.component';
import { ApieleveService} from './service/apieleve.service';
import { DialogFormTuteurComponent } from './eleve/inscription/dialog-form-tuteur/dialog-form-tuteur.component';
import { MaterialModule} from './material-module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MAT_DATE_LOCALE } from '@angular/material';
import { ToolsService } from '../app/service/tools.service';
import { DialogUpdateStudentComponent } from './eleve/inscription/dialog-update-student/dialog-update-student.component';
import { DialogDeleteStudentComponent } from './eleve/dialogs-eleve/dialog-delete-student/dialog-delete-student.component';
import { DialogConfirmInscriptionComponent } from './eleve/inscription/dialog-confirm-inscription/dialog-confirm-inscription.component';
import { StatsComponent } from './stats/stats.component';
import { StatsEleveComponent } from './stats/stats-eleve/stats-eleve.component';
// import { ChartsModule } from 'ng2-charts';
import { DialogDeleteStudentsComponent } from './eleve/dialogs-eleve/dialog-delete-students/dialog-delete-students.component';
import { DialogAddGroupComponent } from './eleve/dialogs-eleve/dialog-add-group/dialog-add-group.component';
import { ListeGroupComponent } from './groupe/liste-group/liste-group.component';
import { AjoutGroupComponent } from './groupe/ajout-group/ajout-group.component';
import { AboutStudentComponent } from './eleve/about-student/about-student.component';
import { LoginComponent } from './login/login.component';
import { AboutGroupComponent } from './groupe/about-group/about-group.component';
import { GroupEleveComponent } from './eleve/group-eleve/group-eleve.component';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { AdministrationComponent } from './administration/administration.component';
import { AdminGroupComponent } from './administration/admin-group/admin-group.component';
import { AdminAddGroupComponent } from './administration/admin-group/admin-add-group/admin-add-group.component';
import { AdminEtablissementComponent } from './administration/admin-etablissement/admin-etablissement.component';
import { DialogAddEtablissementComponent } from './administration/admin-etablissement/dialog-add-etablissement/dialog-add-etablissement.component';
import { DialogDeleteEtablissementComponent } from './administration/admin-etablissement/dialog-delete-etablissement/dialog-delete-etablissement.component';
import { DialogUpdateEtablissementComponent } from './administration/admin-etablissement/dialog-update-etablissement/dialog-update-etablissement.component';
import { DialogUpdateGroupComponent } from './administration/admin-group/dialog-update-group/dialog-update-group.component';
import { DialogDeleteGroupComponent } from './administration/admin-group/dialog-delete-group/dialog-delete-group.component';
import { DialogDeleteStudentFromGroupComponent } from './groupe/about-group/dialog-delete-student-from-group/dialog-delete-student-from-group.component';
import { AdminProfComponent } from './administration/admin-prof/admin-prof.component';
import { DialogAddProfComponent } from './administration/admin-prof/dialog-add-prof/dialog-add-prof.component';
import { DialogUpdateProfComponent } from './administration/admin-prof/dialog-update-prof/dialog-update-prof.component';
import { DialogDeleteProfComponent } from './administration/admin-prof/dialog-delete-prof/dialog-delete-prof.component';
import { AdminPrixComponent } from './administration/admin-prix/admin-prix.component';
import { DialogDeletePriceComponent } from './administration/admin-prix/dialog-delete-price/dialog-delete-price.component';
import { DialogUpdatePriceComponent } from './administration/admin-prix/dialog-update-price/dialog-update-price.component';
import { DialogAddPriceComponent } from './administration/admin-prix/dialog-add-price/dialog-add-price.component';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
   {path: '', component: LoginComponent },
   {path: 'Inscription', component: InscriptionComponent },
   {path: 'Stats', component: StatsComponent},
   {path : 'aboutStudent/:id', component : AboutStudentComponent},
   {path : 'ListeGroup', component : ListeGroupComponent},
   {path: 'ListStudents', component: ListeEleveComponent},
   {path: 'AboutGroup/:id', component: AboutGroupComponent},
   {path: 'GroupofEleve/:id', component : GroupEleveComponent},
   {path : 'administration', component : AdministrationComponent},
   {path : 'adminGroup', component : AdminGroupComponent},
   {path : 'adminEtablissement', component : AdminEtablissementComponent},
   {path : 'adminProf', component : AdminProfComponent},
   {path :'adminPrix', component : AdminPrixComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ListeEleveComponent,
    DialogFormTuteurComponent,
    DialogUpdateStudentComponent,
    DialogDeleteStudentComponent,
    DialogConfirmInscriptionComponent,
    StatsComponent,
    StatsEleveComponent,
    DialogDeleteStudentsComponent,
    DialogAddGroupComponent,
    ListeGroupComponent,
    AjoutGroupComponent,
    AboutStudentComponent,
    LoginComponent,
    AboutGroupComponent,
    GroupEleveComponent,
    AdministrationComponent,
    AdminGroupComponent,
    AdminAddGroupComponent,
    AdminEtablissementComponent,
    DialogAddEtablissementComponent,
    DialogDeleteEtablissementComponent,
    DialogUpdateEtablissementComponent,
    DialogUpdateGroupComponent,
    DialogDeleteGroupComponent,
    DialogDeleteStudentFromGroupComponent,
    AdminProfComponent,
    DialogAddProfComponent,
    DialogUpdateProfComponent,
    DialogDeleteProfComponent,
    AdminPrixComponent,
    DialogDeletePriceComponent,
    DialogUpdatePriceComponent,
    DialogAddPriceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    // ChartsModule
  ],
  providers: [EleveService, ApieleveService, {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
   ToolsService, {provide: LOCALE_ID, useValue: 'fr' }],

  bootstrap: [AppComponent],
  
  entryComponents: [DialogFormTuteurComponent, DialogUpdateStudentComponent,
    DialogDeleteStudentComponent, DialogConfirmInscriptionComponent, DialogDeleteStudentsComponent, DialogAddGroupComponent
    ,AdminAddGroupComponent, DialogAddEtablissementComponent, DialogDeleteEtablissementComponent, DialogUpdateEtablissementComponent,
    DialogUpdateGroupComponent, DialogDeleteGroupComponent, DialogDeleteStudentFromGroupComponent, DialogAddProfComponent,
    DialogUpdateProfComponent, DialogDeleteProfComponent, DialogDeletePriceComponent, DialogUpdatePriceComponent, DialogAddPriceComponent]
})
export class AppModule { }
