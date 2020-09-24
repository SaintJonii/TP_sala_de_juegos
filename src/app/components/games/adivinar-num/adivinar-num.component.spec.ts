import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarNumComponent } from './adivinar-num.component';

describe('AdivinarNumComponent', () => {
  let component: AdivinarNumComponent;
  let fixture: ComponentFixture<AdivinarNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinarNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinarNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
