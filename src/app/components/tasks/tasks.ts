import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../Task';
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
}
