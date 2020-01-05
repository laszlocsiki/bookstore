import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../modules/global/entities/book.entity';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() bookData: Book;
}
