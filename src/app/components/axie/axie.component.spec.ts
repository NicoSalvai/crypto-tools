import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxieComponent } from './axie.component';

describe('AxieComponent', () => {
  let component: AxieComponent;
  let fixture: ComponentFixture<AxieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
