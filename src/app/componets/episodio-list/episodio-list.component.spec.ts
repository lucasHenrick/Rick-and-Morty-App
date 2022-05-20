import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioListComponent } from './episodio-list.component';

describe('EpisodioListComponent', () => {
  let component: EpisodioListComponent;
  let fixture: ComponentFixture<EpisodioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
