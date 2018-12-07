import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDiscoveryMenuComponent } from './header-discovery-menu.component';

describe('HeaderDiscoveryMenuComponent', () => {
  let component: HeaderDiscoveryMenuComponent;
  let fixture: ComponentFixture<HeaderDiscoveryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDiscoveryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDiscoveryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
