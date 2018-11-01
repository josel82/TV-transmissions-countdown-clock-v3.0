import { Component, Input ,Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('open', style({
        display:'block',
        visibility: 'visible',
        opacity: 1;
      })),
      state('close', style({
        display:'none',
        visibility: 'hidden',
        opacity: 0
      })),
      transition('open <=> close', [
        animate(100)
      ])
    ])
  ]

})
export class PopupComponent {
  @Output() close = new EventEmitter<void>();
  @Input('open') isOpen:boolean;
  @Input() content: string = '';

  onClose(){
    this.close.emit();
  }
}
