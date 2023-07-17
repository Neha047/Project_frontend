import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoidetalsComponent } from './appoidetals.component';

describe('AppoidetalsComponent', () => {
  let component: AppoidetalsComponent;
  let fixture: ComponentFixture<AppoidetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoidetalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoidetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
