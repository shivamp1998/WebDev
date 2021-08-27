
import { Component, OnInit, ElementRef, EventEmitter, Output} from '@angular/core';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {
  @Output() resumeEvent = new EventEmitter<NgForm>();
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(t: NgForm) {
    console.log("submitted!");
    this.resumeEvent.emit(t);
  }

}
