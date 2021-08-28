import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-resumedisplay',
  templateUrl: './resumedisplay.component.html',
  styleUrls: ['./resumedisplay.component.css']
})
export class ResumedisplayComponent implements OnInit {

  constructor() { }
  @Input() data: NgForm;
  ngOnInit(): void {
  }


}
