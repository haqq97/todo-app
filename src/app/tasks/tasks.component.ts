import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openTaskFormModal() {
    this.modalRef = this.modalService.show(TaskFormComponent, {
      class: 'modal-dialog-centered',
      animated: true,
    });
    this.modalRef.content.formCompleted.subscribe((result) => {
      if (result === 'Completed' || result === 'Canceled') {
        this.modalRef.hide();
      }
    });
  }
}
