import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSignupBlockComponent } from './header-signup-block.component';

describe('HeaderSignupBlockComponent', () => {
  let component: HeaderSignupBlockComponent;
  let fixture: ComponentFixture<HeaderSignupBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSignupBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSignupBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
