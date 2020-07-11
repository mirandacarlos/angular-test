import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomesGridComponent } from './gnomes-grid.component';

describe('GnomesGridComponent', () => {
  let component: GnomesGridComponent;
  let fixture: ComponentFixture<GnomesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
