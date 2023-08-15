import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    new Task(
      1,
      'TODO app',
      false,
      new Date('08/29/2023'),
      1,
      'work',
      'Create a TODO app in Angular'
    ),
    new Task(
      1,
      'Rebuild',
      false,
      new Date('08/30/2023'),
      1,
      'work',
      'Return to future view'
    ),
    new Task(
      1,
      'Buy table',
      false,
      new Date('08/25/2023'),
      1,
      'shopping',
      'Bisma work table'
    ),
    new Task(
      1,
      'Hard Birthday',
      false,
      new Date('09/27/2023'),
      1,
      'birthday',
      'Wish him a happy birthday'
    ),
    new Task(
      1,
      'Ankur Birthday',
      false,
      new Date('09/25/2023'),
      1,
      'birthday',
      'wish him a happy birthday'
    ),
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  getAllTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks.slice());
  }

  deleteTask(task: Task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(this.tasks);
    this.tasksSubject.next(this.tasks.slice());
  }
}
