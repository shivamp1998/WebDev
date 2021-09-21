import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray }   from '@angular/forms';
@Component({
  selector: 'app-resumedisplay',
  templateUrl: './resumedisplay.component.html',
  styleUrls: ['./resumedisplay.component.css']
})
export class ResumedisplayComponent implements OnInit {
  constructor() { }
  @Input() data: FormGroup;
  @ViewChild('elref') element: ElementRef;
  ngOnInit(): void {
  }
  onprint() {
    this.element.nativeElement.style.display = "none";
    window.print();
    console.log("Printing");
  }

}
