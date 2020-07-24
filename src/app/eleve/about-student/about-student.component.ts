import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApieleveService } from 'src/app/service/apieleve.service';

@Component({
  selector: 'app-about-student',
  templateUrl: './about-student.component.html',
  styleUrls: ['./about-student.component.scss']
})
export class AboutStudentComponent implements OnInit {

  id: string;
  student: any;
  groupesOfStudent: any;
  constructor(
    private route: ActivatedRoute,
    private eleveService: ApieleveService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.eleveService.getDetailsStudent(this.id).subscribe((response) => {
      this.student = response[0];
      console.log(this.student);
    },
    (err) => console.log(err));

    // this.eleveService.getGroupsOfEleve(this.id).subscribe((response) => {
    //   this.groupesOfStudent = response;
    //   console.log(this.groupesOfStudent);
    // },
    // (err) => console.log(err));
  }

}
