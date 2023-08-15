export class Task {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean = false,
    public dueDate?: Date,
    public priority?: number,
    public category?: string,
    public description?: string,
    public subTasks?: Task[]
  ) {}
}
