import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereequipeComponent } from './gereequipe.component';

describe('GereequipeComponent', () => {
  let component: GereequipeComponent;
  let fixture: ComponentFixture<GereequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GereequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GereequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
