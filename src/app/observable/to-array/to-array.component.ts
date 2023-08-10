import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/appServices/design-utilities.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit{

  users=[
    {name:'Abhishek', skills: 'Angular'},
    {name:'Varun', skills: 'HTML CSS'},
    {name:'Umang', skills: 'React'},
    {name:'Sharma', skills: 'Vue'}
  ]
  sourceSub!:Subscription;
  constructor(private designUtility:DesignUtilitiesService){}

  ngOnInit(): void {
      
    // Ex: 01 (by interval)

    const source1 = interval(1000);
    this.sourceSub = source1.pipe(take(5), toArray()).subscribe(res =>{
      console.log('Interval: ', res);
      this.designUtility.print(res.toString(), 'elContainer');
    })


    // Ex: 02 (by from operator)
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res=>{
      console.log('From: ', res);
      this.designUtility.print(res.toString(), 'elContainer2');
    })

    // Ex: 03 (by of operator)

    const source3 = of('Abhishek', 'Varun', 'Sharma', 'Umang');
    source3.pipe(toArray()).subscribe(res=>{
      console.log('Of: ', res);
      this.designUtility.print(res.toString(), 'elContaine3r');
    })
  }

}
