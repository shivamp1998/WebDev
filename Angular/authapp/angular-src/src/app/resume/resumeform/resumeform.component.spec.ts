import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeformComponent } from './resumeform.component';

describe('ResumeformComponent', () => {
  let component: ResumeformComponent;
  let fixture: ComponentFixture<ResumeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
