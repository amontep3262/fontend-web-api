import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModule } from './material';
import { AdminComponent } from './login/admin/admin.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './login/admin/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ManageAdminComponent } from './login/admin/manage-admin/manage-admin.component';
import { ManageUserComponent } from './login/admin/manage-user/manage-user.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MannageStudentComponent } from './login/admin/mannage-student/mannage-student.component';
import { ManageAdvisorComponent } from './login/admin/manage-advisor/manage-advisor.component';
import { ReportBehaviorComponent } from './login/admin/report-behavior/report-behavior.component';
import { UploadFileComponent } from './login/admin/upload-file/upload-file.component';
import { PaginationModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    ManageAdminComponent,
    ManageUserComponent,
    MannageStudentComponent,
    ManageAdvisorComponent,
    ReportBehaviorComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
