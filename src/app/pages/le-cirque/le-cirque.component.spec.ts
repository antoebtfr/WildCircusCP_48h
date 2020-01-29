import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeCirqueComponent } from './le-cirque.component';

describe('LeCirqueComponent', () => {
  let component: LeCirqueComponent;
  let fixture: ComponentFixture<LeCirqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeCirqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeCirqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
