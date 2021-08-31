import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  formData: NgForm;
  constructor() { }
  view: boolean = false;
  ngOnInit(): void {
  }
  handleEvent(event: NgForm) {
    this.formData = event;
  }
  handleView() {
    this.view=!this.view;
  }

}
