import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  moveToAdminGroup(){
    this.router.navigate(['/adminGroup']);
  }

  moveToAdminEtablissement(){
    this.router.navigate(['/adminEtablissement']);
  }

  moveToProf(){
    this.router.navigate(['/adminProf']);
  }

  moveToPrice(){
    this.router.navigate(['/adminPrix']);
  }

}
