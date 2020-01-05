import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Book} from '../entities/book.entity';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: AngularFirestore) {
  }

  getBooks(): Observable<Book[]> {
    return this.firestore.collection('books').snapshotChanges().pipe(
      map(data => data.map(e => ({
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        })) as Book[]
      )
    );
  }

  createBook(book: Book) {
    return this.firestore.collection('books').add(book);
  }

  updateBook(book: Book) {
    delete book.id;
    this.firestore.doc('books/' + book.id).update(book);
  }

  deleteBook(bookId: string) {
    this.firestore.doc('books/' + bookId).delete();
  }
}
