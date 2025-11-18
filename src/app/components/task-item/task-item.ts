import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  @Input() task: Task = { id: 0, text: '', day: '', reminder: false };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  onClick(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    this.onToggleTask.emit(task);
  }
}
