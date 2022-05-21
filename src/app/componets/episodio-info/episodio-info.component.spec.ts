import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioInfoComponent } from './episodio-info.component';

describe('EpisodioInfoComponent', () => {
  let component: EpisodioInfoComponent;
  let fixture: ComponentFixture<EpisodioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodioInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
