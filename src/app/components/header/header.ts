import { Component, Signal, signal } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly title: Signal<string> = signal('Task Tracker');

  toggleAddTask() {
    console.log('task added');
  }
}
