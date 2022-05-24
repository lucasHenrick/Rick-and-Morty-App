import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisInfoComponent } from './locais-info.component';

describe('LocaisInfoComponent', () => {
  let component: LocaisInfoComponent;
  let fixture: ComponentFixture<LocaisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaisInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
