import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {AuthenticationComponent} from './containers/authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { BookComponent } from './components/book/book.component';
import { CreateBookDialogComponent } from './components/create-book-dialog/create-book-dialog.component';

const materials = [
  MatButtonModule,
  MatSliderModule,
  MatRadioModule,
  MatDialogModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatBadgeModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatRippleModule
];

const components = [
  LoginComponent,
  RegisterComponent,
  NavigationComponent,
  BookContainerComponent,
  BookComponent,
  CreateBookDialogComponent
];

const containers = [
  AppComponent,
  DashboardComponent,
  AuthenticationComponent
];

@NgModule({
  declarations: [
    ...containers,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materials
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateBookDialogComponent]
})
export class AppModule { }
