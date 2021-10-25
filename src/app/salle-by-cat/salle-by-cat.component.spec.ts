import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleByCatComponent } from './salle-by-cat.component';

describe('SalleByCatComponent', () => {
  let component: SalleByCatComponent;
  let fixture: ComponentFixture<SalleByCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleByCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
