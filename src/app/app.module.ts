/**
 * Core Angular module importation
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

/**
 * Component's and Pipes importation
 */
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { RatingComponent } from './rating.component';
import { TruncatePipe } from './truncate.pipe';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    // Array of component's, pipes used with the application
    AppComponent, ProductsComponent,ProductComponent, RatingComponent, TruncatePipe, UserFormComponent, LoginComponent
  ],
  imports: [
    // Array of external module's required with the applcation
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
