import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedisplayComponent } from './resumedisplay.component';

describe('ResumedisplayComponent', () => {
  let component: ResumedisplayComponent;
  let fixture: ComponentFixture<ResumedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumedisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
