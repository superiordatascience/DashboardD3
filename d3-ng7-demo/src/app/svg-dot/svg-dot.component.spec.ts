import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDotComponent } from './svg-dot.component';

describe('SvgDotComponent', () => {
  let component: SvgDotComponent;
  let fixture: ComponentFixture<SvgDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
