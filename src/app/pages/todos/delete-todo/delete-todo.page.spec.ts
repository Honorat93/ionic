import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTodoPage } from './delete-todo.page';

describe('DeleteTodoPage', () => {
  let component: DeleteTodoPage;
  let fixture: ComponentFixture<DeleteTodoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
