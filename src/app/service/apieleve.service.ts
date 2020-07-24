import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../model/eleve';
import { Tuteur} from '../model/tuteur';
import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApieleveService {

  students: any[];
  results: Object[];
  loading: boolean;
  moyennes: any[];

  groupsofEleve: any[];
  eleveOfGroup: any[];

  url = "http://localhost:5000/api/";


  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }


  // ************************** Call about Student
  getStudents() {
   const promise = new Promise((resolve, reject) => {
    this.http.get<any>(this.url+'afficherEleve')
    .toPromise()
    .then(
      res => { console.log(res);
      this.students = res;
      resolve();
      },
      msg => {
        reject();
      }
    );
   });
   return promise;
  }

  getAllMoyennes() {
    const promise = new Promise((resolve, reject) => {
      this.http.get<any>(this.url+'getMoyennes').toPromise().then( res => {
        this.moyennes = res;
        resolve();
      }, msg => {
        reject();
      });
    });
    return promise;
}

  postStudent(eleve: Eleve) {
    return this.http.post(this.url+'ajouterEleve', eleve);
  }

  updateStudent(eleve: Eleve) {
    return this.http.put(this.url+'modifierEleve', eleve);
  }

  deleteStudent(id: string) {
    return this.http.delete(this.url+'deleteStudent/' + id);
  }

  getDetailsStudent(id: string) {
    return this.http.get<any>(this.url+'detailsStudent/' + id);
  }


  getGroupsOfEleve(id : string) {
    const promise = new Promise((resolve, reject) => {
     this.http.get<any>(this.url+'getGrouspOfEleve/'+id)
     .toPromise()
     .then(
       res => { console.log(res);
       this.groupsofEleve = res;
       resolve();
       },
       msg => {
         reject();
       }
     );
    });
    return promise;
   }

  // Get All etablissements
  getAllEtablissements() {
    return this.http.get<any>(this.url+'getAllEtablissement');
  }

  addEtablissement(form) {
    return this.http.post(this.url+'addEtablissement', form);
  }

  updateEtablissement(form){
    return this.http.put(this.url+'modifierEtablissement', form);

  }

  deleteEtablissement(id : string) {
    return this.http.delete(this.url+'deleteEtablissement/'+id)
  }

  // Get all years
  getAllAnnes() {
    return this.http.get<any>(this.url+'getAllAnnees');
  }

  // ***************** About tuteurs
  getAllTuteurs() {
    return this.http.get<any>(this.url+'getAllTuteur');
  }

  postTuteur(tuteur: Tuteur) {
    return this.http.post(this.url+'ajouterTuteur', tuteur);
  }

  // ***********$ About Groups
  getAllGroups() {
    return this.http.get<any>(this.url+'getAllGroups');
  }

  getAllTarifs() {
    return this.http.get<any>(this.url+'getAllTarifs');
  }

  postStudenttoGroup(form) {
    return this.http.post(this.url+'addStudentGroup', form);
  }

  getGroupById(id : string) {
    return this.http.get<any>(this.url+'getGroup/'+id);
  }

  getEleveOfGroup(id : string) {
    const promise = new Promise((resolve, reject) => {
     this.http.get<any>(this.url+'getEleveGroupe/'+id)
     .toPromise()
     .then(
       res => { console.log(res);
       this.eleveOfGroup = res;
       resolve();
       },
       msg => {
         reject();
       }
     );
    });
    return promise;
   }

   addNewGroup(form) {
     return this.http.post(this.url+'addGroup', form);
   }

   updateGroup(form){
    return this.http.put(this.url+'updateGroup', form);
  }

  deleteGroup(id : string){
    return this.http.delete(this.url+'deleteGroup/'+id)
  }

  deleteStudentFromGroup(idStudent : string, idGroup : string) {
    return this.http.delete(this.url+'deleteStudentFromGroup/'+idStudent+'/'+idGroup);
  }

  getAllProf(){
    return this.http.get(this.url+'allProfs');
  }

  addProf(form){
    return this.http.post(this.url+'addProf', form);
  }

  deleteProf(id : string){
    console.log(id)
    return this.http.delete(this.url+'deleteProf/'+id)
  }

  getAllPrices() {
    return this.http.get<any>(this.url+'allPrice');
  }

  deletePrice(idPrice : string) {
    return this.http.delete(this.url+'deletePrice/'+idPrice);
  }

  updatePrice(form){
    return this.http.put(this.url+'updatePrice', form);
  }

  addPrice(form){
    return this.http.post(this.url+'addPrice', form);
  }


}
