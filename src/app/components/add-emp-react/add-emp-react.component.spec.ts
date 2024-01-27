import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpReactComponent } from './add-emp-react.component';

describe('AddEmpReactComponent', () => {
  let component: AddEmpReactComponent;
  let fixture: ComponentFixture<AddEmpReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmpReactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmpReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
