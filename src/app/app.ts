import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
