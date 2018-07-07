import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGlAccountComponent } from './search-gl-account.component';

describe('SearchGlAccountComponent', () => {
  let component: SearchGlAccountComponent;
  let fixture: ComponentFixture<SearchGlAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGlAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGlAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
