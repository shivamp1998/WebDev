import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstObservable: Subscription;
  constructor() { }

  ngOnInit() {
    this.firstObservable = interval(1000).subscribe(count => {
      console.log(count);
    })
    // let count = 0;
    // const customObservable = Observable.create(observer => {
    //
    //   setInterval( () => {
    //     observer.next(count);
    //     count++;
    //   },1000)
    // });

    // customObservable.subscribe(data => {
    //   console.log(data);
    // })
  }
  ngOnDestroy() {
    this.firstObservable.unsubscribe();
  }

}
