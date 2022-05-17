import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAlterComponent } from './logo-alter.component';

describe('LogoAlterComponent', () => {
  let component: LogoAlterComponent;
  let fixture: ComponentFixture<LogoAlterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAlterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
