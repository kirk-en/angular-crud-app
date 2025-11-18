import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe();
  }
}
