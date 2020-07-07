import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveaulstComponent } from './niveaulst.component';

describe('NiveaulstComponent', () => {
  let component: NiveaulstComponent;
  let fixture: ComponentFixture<NiveaulstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveaulstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveaulstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
