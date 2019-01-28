import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs';

import { Desi } from '../shared/models/desi.model';

@Component({
  selector: 'app-time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.scss']
})
export class TimeChartComponent implements OnInit {

  data$: Observable<Desi[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data$ = this.dataService.getData();
  }

}
