import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydevoirsComponent } from './mydevoirs.component';

describe('MydevoirsComponent', () => {
  let component: MydevoirsComponent;
  let fixture: ComponentFixture<MydevoirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydevoirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydevoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
