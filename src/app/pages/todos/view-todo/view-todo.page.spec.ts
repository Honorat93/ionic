import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTodoPage } from './view-todo.page';

describe('ViewTodoPage', () => {
  let component: ViewTodoPage;
  let fixture: ComponentFixture<ViewTodoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
