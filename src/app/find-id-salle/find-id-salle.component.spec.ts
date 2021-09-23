import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIdSalleComponent } from './find-id-salle.component';

describe('FindIdSalleComponent', () => {
  let component: FindIdSalleComponent;
  let fixture: ComponentFixture<FindIdSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindIdSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindIdSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
