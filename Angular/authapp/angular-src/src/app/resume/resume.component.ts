import { Component, OnInit, ElementRef  } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleEvent(event: NgForm) {
    console.log(event.value);
  }
}
