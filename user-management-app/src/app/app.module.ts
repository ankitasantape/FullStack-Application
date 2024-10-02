import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Needed for ngModel in forms
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Add HttpClientModule here
    FormsModule  // Add FormsModule for two-way binding (ngModel)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
