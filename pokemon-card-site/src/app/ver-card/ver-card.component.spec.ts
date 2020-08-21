import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCardComponent } from './ver-card.component';

describe('VerCardComponent', () => {
  let component: VerCardComponent;
  let fixture: ComponentFixture<VerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
