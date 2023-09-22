import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferenceComponent } from './refference.component';

describe('RefferenceComponent', () => {
  let component: RefferenceComponent;
  let fixture: ComponentFixture<RefferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
