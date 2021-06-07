import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RulesCreationComponent } from './rules-creation/rules-creation.component';
import { ReportsComponent } from './reports/reports.component';
import { MasterDataManagementComponent } from './master-data-management/master-data-management.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RulesCreationComponent,
    ReportsComponent,
    MasterDataManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
