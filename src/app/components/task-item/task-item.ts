import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  @Input() task: Task = { id: 0, text: '', day: '', reminder: false };
  faTimes = faTimes;

  onClick() {
    console.log('clicked the X');
  }
}
