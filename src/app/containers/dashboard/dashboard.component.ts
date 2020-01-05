import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService, BookService} from '../../../modules/global/services';
import {combineLatest, EMPTY, forkJoin, iif, Observable, Subject} from 'rxjs';
import {Book} from '../../../modules/global/entities/book.entity';
import {MatDialog} from '@angular/material';
import {CreateBookDialogComponent} from '../../components/create-book-dialog/create-book-dialog.component';
import {switchMap, takeUntil, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  destroy$ = new Subject();

  constructor(private bookService: BookService, public dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

  addBook() {
    const dialogRef = this.dialog.open(CreateBookDialogComponent, {
      width: '90%',
      maxWidth: '1000px',
      maxHeight: '90%',
      data: {createMode: false}
    });

    dialogRef.afterClosed().pipe(
      withLatestFrom(this.authService.userId$),
      takeUntil(this.destroy$))
      .subscribe(([data, userId]: [Book, string]) => {
        if (data) {
          if (!data.imageURL || data.imageURL === '') {
            // tslint:disable-next-line:max-line-length
            data.imageURL = 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80';
          }
          data.userId = userId;
          this.bookService.createBook(data);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
