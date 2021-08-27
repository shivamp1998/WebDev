import { Component, OnInit, ElementRef  } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  formData: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  handleEvent(event: NgForm) {
    this.formData = event;
  }
}
