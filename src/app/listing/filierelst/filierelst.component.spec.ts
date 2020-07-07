import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilierelstComponent } from './filierelst.component';

describe('FilierelstComponent', () => {
  let component: FilierelstComponent;
  let fixture: ComponentFixture<FilierelstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilierelstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilierelstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
