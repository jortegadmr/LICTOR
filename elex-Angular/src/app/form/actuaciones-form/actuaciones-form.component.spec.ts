import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuacionesFormComponent } from './actuaciones-form.component';

describe('ActuacionesFormComponent', () => {
  let component: ActuacionesFormComponent;
  let fixture: ComponentFixture<ActuacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActuacionesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActuacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
