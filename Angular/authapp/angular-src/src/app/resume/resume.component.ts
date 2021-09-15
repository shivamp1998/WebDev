import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray }   from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  formData: FormGroup;
  constructor() { }
  view: boolean = false;
  ngOnInit(): void {
  }
  handleEvent(event: FormGroup) {
    this.formData = event;
  }
  handleView() {
    this.view=!this.view;
  }

}
