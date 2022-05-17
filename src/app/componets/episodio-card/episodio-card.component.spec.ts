import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioCardComponent } from './episodio-card.component';

describe('EpisodioCardComponent', () => {
  let component: EpisodioCardComponent;
  let fixture: ComponentFixture<EpisodioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
