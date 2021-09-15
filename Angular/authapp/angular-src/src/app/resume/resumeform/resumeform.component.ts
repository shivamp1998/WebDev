
import { Component, OnInit, ElementRef, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray }   from '@angular/forms';
@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {
  @Output() resumeEvent = new EventEmitter<FormGroup>();
  resumeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.resumeForm = this.formBuilder.group({
      name: ['', Validators.required],
      currentRole: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: '',
      github: '',
      objective: ['', Validators.required],
      experienceBlocks:this.formBuilder.array([this.buildExperienceBlock()]),
      educationBlocks: this.formBuilder.array([this.buildEducationBlock()]),
      skills: this.formBuilder.array([this.buildSkills()]),
      achievements: this.formBuilder.array([this.buildAchievements()])
    });
  }

  buildExperienceBlock(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
      company: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country:['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  buildEducationBlock(): FormGroup{
    return this.formBuilder.group({
      institute: ['', Validators.required],
      course: ['', Validators.required],
      location: ['', Validators.required],
      grade: ['',Validators.required],
      startYear: ['', Validators.required],
      endYear: ['', Validators.required]
    })
  }
  buildSkills(): FormGroup{
    return this.formBuilder.group({
      skill:['', Validators.required]
    })
  }
  buildAchievements(): FormGroup{
    return this.formBuilder.group({
      achievementName: ['', Validators.required],
      achievementDesc: ['', Validators.required]
    })
  }


  get achievements(): FormArray {
    return this.resumeForm.get('achievements') as FormArray;
  }
  addAchievements() {
    this.achievements.insert(0, this.buildAchievements());
  }
  get skills():FormArray {
    return this.resumeForm.get('skills') as FormArray;
  }
  addSkills(){
    this.skills.push(this.buildSkills());
  }
  get experienceBlocks(): FormArray {
    return this.resumeForm.get('experienceBlocks') as FormArray;
  }
  addExperience() {
    console.log("click")
    this.experienceBlocks.insert(0, this.buildExperienceBlock());
  }
  get educationBlocks(): FormArray {
    return this.resumeForm.get('educationBlocks') as FormArray;
  }
  addEducation() {
    this.educationBlocks.insert(0, this.buildEducationBlock());
  }
  save() {
    console.log(this.resumeForm.value);
    this.resumeEvent.emit(this.resumeForm);
  }

}
