import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ApieleveService } from '../../service/apieleve.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-stats-eleve',
  templateUrl: './stats-eleve.component.html',
  styleUrls: ['./stats-eleve.component.scss']
})
export class StatsEleveComponent implements OnInit {

  public moyennes: any = [];

  // Doughnut parameters
  // public doughnutChartLabels: Label[] = ['Moyenne plus de 15', 'Moyenne entre 10 et 15', 'Moyenne en dessous de 10'];
  // public doughnutChartData: MultiDataSet = [
  //   [10, 20, 30]
  // ];
  // public doughnutChartType: any = 'doughnut';

  // Bar Char Parameters
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public barChartLabels: Label[] = ['Moyenne'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [];

  constructor(private eleveService: ApieleveService) { }

  ngOnInit() {
    // this.eleveService.getAllMoyennes().then(() => {
    //   this.moyennes = this.eleveService.moyennes;
    //   console.log(this.moyennes);
    //   let cpt = 0;
    //   let cptplus = 0;
    //   let cptmoin = 0;
    //   let max = 0;
    //   let min = 20;

    //   this.moyennes.forEach(element => {
    //     const moyenne = element.moyenne;
    //     if (moyenne > max) {
    //       max = moyenne;
    //     }
    //     if (moyenne < min) {
    //       min = moyenne;
    //     }
    //     if (moyenne < 10) {
    //       cptmoin++;
    //     } else if (moyenne >= 10 && moyenne <= 15) {
    //       cpt++;
    //     } else {
    //       cptplus++;
    //     }
    //   });
    //   this.barChartData = [
    //     { data: [max], label: 'Moyenne Max' },
    //     { data: [min], label: 'Moyenne Min' }
    //   ];
    //   console.log(max);
    //   console.log(min);
    //   this.doughnutChartData = [[cptplus, cpt, cptmoin]];
    // });
  }
}
