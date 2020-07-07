import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallelstComponent } from './sallelst.component';

describe('SallelstComponent', () => {
  let component: SallelstComponent;
  let fixture: ComponentFixture<SallelstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallelstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallelstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
