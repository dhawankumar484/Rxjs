import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit{

  obsMsg!: string;
  videoSubscriptionInterval!: Subscription;

  constructor(private designUtilities:DesignUtilitiesService){ }

  ngOnInit(): void {
      const broadCastVideoInterval = timer(5000, 1000);
      // const broadCastVideoTimer = timer(5000, 1000);

      this.videoSubscriptionInterval = broadCastVideoInterval.subscribe(res => {
        this.obsMsg = 'Video ' + res;
        this.designUtilities.print(this.obsMsg, "elContainer");
        this.designUtilities.print(this.obsMsg, "elContainer2");
        if(res>=10){
          this.videoSubscriptionInterval.unsubscribe();
        }
      })
  }
}
