import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoCardComponent } from './perso-card.component';

describe('PersoCardComponent', () => {
  let component: PersoCardComponent;
  let fixture: ComponentFixture<PersoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
