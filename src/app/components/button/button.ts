import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
    return;
  }
}
