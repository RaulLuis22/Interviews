// market-page.component.ts
import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-market-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {
  // interviewSeries: any[];

  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {
    this.getInterviewSeries();
  }

  getInterviewSeries(): void {
    // this.interviewService.getInterviewSeries()
      // .subscribe(series => this.interviewSeries = series);
  }

  purchaseSeries(series: any): void {
    // Implement purchase functionality
  }
}
