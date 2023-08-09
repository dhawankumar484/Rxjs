import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})

export class FromEventComponent implements OnInit, AfterViewInit{

  constructor(private designUtilities:DesignUtilitiesService){ }

  @ViewChild('addBtn')
  addBtn!: ElementRef;

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      let count=0;
      fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
        let countVal = 'video ' + count++;
        this.designUtilities.print(countVal, 'elContainer');
        this.designUtilities.print(countVal, 'elContainer2');
      })
  }

  // routerToHome(){

  // }

}
