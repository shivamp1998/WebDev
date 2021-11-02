
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
    this.achievements.push(this.buildAchievements());
  }
  deleteAchievements(index: any){
    this.achievements.removeAt(index);
  }
  get skills():FormArray {
    return this.resumeForm.get('skills') as FormArray;
  }
  addSkills(){
    this.skills.push(this.buildSkills());
  }
  deleteSkills(index: any){
    this.skills.removeAt(index);
  }
  get experienceBlocks(): FormArray {
    return this.resumeForm.get('experienceBlocks') as FormArray;
  }
  addExperience() {
    console.log("click")
    this.experienceBlocks.push(this.buildExperienceBlock());
  }
  deleteExperience(index: any) {
    this.experienceBlocks.removeAt(index);
  }
  get educationBlocks(): FormArray {
    return this.resumeForm.get('educationBlocks') as FormArray;
  }
  addEducation() {
    this.educationBlocks.push(this.buildEducationBlock());
  }
  deleteEducation(index: any) {
    this.educationBlocks.removeAt(index);
  }
  save() {
    console.log(this.resumeForm.value);
    console.log(this.resumeForm);
    this.resumeEvent.emit(this.resumeForm);
  }


}
