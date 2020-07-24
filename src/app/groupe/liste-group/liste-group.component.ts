import { Component, OnInit } from '@angular/core';
import { ApieleveService } from '../../service/apieleve.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-group',
  templateUrl: './liste-group.component.html',
  styleUrls: ['./liste-group.component.scss']
})
export class ListeGroupComponent implements OnInit {

  groupes: any = [];

  constructor(
    private eleveService: ApieleveService,
    private router: Router
    ) { }

  ngOnInit() {
    this.eleveService.getAllGroups().subscribe((response) => {
      this.groupes = response;
    });
  }

  mooveToGroupDetail(id: string){
    console.log(id);
    this.router.navigate(['/AboutGroup/:', {id}]);
  }

}
