import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit{
  objMsg!: { a: string; b: string; c: string; };

  constructor(private designUtility:DesignUtilitiesService){}

  ngOnInit(): void {

      //1. of operator
      const obs1 = of('Abhishek', 'Varun', 'Umang');

      obs1.subscribe(res=>{
        this.designUtility.print(res, 'elContainer');
      })

      const obs2 = of({a:'Abhishek', b:'Varun', c:'Umang'});

      obs2.subscribe(res=>{
        this.objMsg = res;
        console.log(res)
      })

      //2. from operator

      //(i) from Array

      const obs3 = from(['Abhishek', 'Varun', 'Umang']);
      
      obs3.subscribe(res=>{
        this.designUtility.print(res, 'elContainer3')
      })

      //(ii) from Promise

      // const promise = new Promise(resolve=>{
      //   setTimeout(()=>{
      //     resolve('Promise Resolved');
      //   },3000);
      // })

      // const obs4 = from(promise);
      // obs4.subscribe(res=>{
      //   this.designUtility.print(res, 'elContainer4');
      // })
      
      //(iii) from String

      const obs5 = from('Welcome to RxJS');
      obs5.subscribe(res=>{
        this.designUtility.print(res, 'elContainer5');
      })
  }
}
