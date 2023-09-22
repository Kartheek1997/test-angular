import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateinfoComponent } from './estimateinfo.component';

describe('EstimateinfoComponent', () => {
  let component: EstimateinfoComponent;
  let fixture: ComponentFixture<EstimateinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
