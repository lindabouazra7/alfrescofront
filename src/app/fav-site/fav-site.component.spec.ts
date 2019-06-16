import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSiteComponent } from './fav-site.component';

describe('FavSiteComponent', () => {
  let component: FavSiteComponent;
  let fixture: ComponentFixture<FavSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
