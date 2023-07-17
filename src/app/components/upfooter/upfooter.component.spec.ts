import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpfooterComponent } from './upfooter.component';

describe('UpfooterComponent', () => {
  let component: UpfooterComponent;
  let fixture: ComponentFixture<UpfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
