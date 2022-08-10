import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoModuleComponent } from './to-do-module.component';

describe('ToDoModuleComponent', () => {
  let component: ToDoModuleComponent;
  let fixture: ComponentFixture<ToDoModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
