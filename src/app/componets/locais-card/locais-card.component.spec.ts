import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisCardComponent } from './locais-card.component';

describe('LocaisCardComponent', () => {
  let component: LocaisCardComponent;
  let fixture: ComponentFixture<LocaisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaisCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
