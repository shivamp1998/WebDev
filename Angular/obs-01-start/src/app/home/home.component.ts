import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { UserService } from "../user.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstObservable: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.firstObservable = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    let count = 0;
    const customObservable = Observable.create(observer => {

      setInterval( () => {
        observer.next(count);
        count++;
      },1000)
    });

    customObservable.pipe(filter((data) => {
      return data > 0;
    }),map((data: number)=> {
      return "Round " + data;
    })).subscribe(data => {
      console.log(data);
    }, (error)=>{
      alert(error.message);
    })
  }
  clickActivated() {
    this.userService.activatedClick.next(true);
  }
  ngOnDestroy() {
    this.firstObservable.unsubscribe();
  }

}
