import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProcessListComponent } from './process-list/process-list.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AdminComponent } from './admin/admin.component';
import { SearchGlAccountComponent } from './search-gl-account/search-gl-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    AppNavComponent,
    ProcessListComponent,
    AppFooterComponent,
    AdminComponent,
    SearchGlAccountComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule
  ],
  entryComponents: [
    SearchGlAccountComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }