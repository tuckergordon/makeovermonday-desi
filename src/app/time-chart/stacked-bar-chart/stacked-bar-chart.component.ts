import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as d3 from 'd3';

import { Desi } from '../../shared/models/desi.model';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {

  @Input() data$: Observable<Desi[]>;

  constructor() { }

  ngOnInit() {
    this.data$.subscribe(data => {
      console.log(data);
    });
  }

}
