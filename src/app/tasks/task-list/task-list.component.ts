import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TaskEditModalComponent } from '../task-edit-modal/task-edit-modal.component';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('0.5s ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  modalRef: BsModalRef;

  constructor(
    private taskService: TaskService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  editTask(task: Task) {
    console.log(task);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  openEditModal(task: Task) {
    this.modalRef = this.modalService.show(TaskEditModalComponent, {
      initialState: { task },
      class: 'modal-dialog-centered',
      animated: true,
    });
  }

  getColorStyle(task: Task): object {
    let backgroundColor = '';

    switch (task.category) {
      case 'work':
        backgroundColor = 'lightblue';
        break;
      case 'shopping':
        backgroundColor = 'yellow';
        break;
      case 'birthday':
        backgroundColor = 'lightpink';
        break;
      // Add more cases for other categories
      default:
        backgroundColor = 'white';
        break;
    }

    return { 'background-color': backgroundColor };
  }
}
