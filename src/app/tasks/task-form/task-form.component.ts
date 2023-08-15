import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  @Output() formCompleted = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: '',
      priority: 1,
      dueDate: '',
      category: '',
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.formCompleted.emit('Completed');
      this.taskForm.reset();
    }
  }

  onCancel() {
    this.formCompleted.emit('Canceled');
    this.taskForm.reset();
  }
}
