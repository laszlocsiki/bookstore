import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent {
  @Output() addBook = new EventEmitter();

}
