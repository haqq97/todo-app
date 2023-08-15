import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-edit-modal',
  templateUrl: './task-edit-modal.component.html',
  styleUrls: ['./task-edit-modal.component.css'],
})
export class TaskEditModalComponent implements OnInit {
  @Input() task: Task;
  taskEditForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.taskEditForm = this.formBuilder.group({
      title: [this.task.title, Validators.required],
      description: [this.task.description],
      priority: [this.task.priority],
      dueDate: [this.task.dueDate],
      category: [this.task.category],
    });
  }

  editTask() {
    if (this.taskEditForm.valid) {
      console.log(this.taskEditForm.value);
      this.taskService.updateTask(this.task, this.taskEditForm.value);
      this.closeModal();
    }
  }

  deleteTask() {
    this.taskService.deleteTask(this.task);
    this.closeModal();
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
