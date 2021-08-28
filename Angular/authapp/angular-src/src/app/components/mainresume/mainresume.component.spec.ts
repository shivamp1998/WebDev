import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainresumeComponent } from './mainresume.component';

describe('MainresumeComponent', () => {
  let component: MainresumeComponent;
  let fixture: ComponentFixture<MainresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
