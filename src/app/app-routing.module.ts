import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './login/admin/admin.component';
import { HomeComponent } from './login/admin/home/home.component';
import { ManageAdminComponent } from './login/admin/manage-admin/manage-admin.component';
import { ManageUserComponent } from './login/admin/manage-user/manage-user.component';
import { MannageStudentComponent} from './login/admin/mannage-student/mannage-student.component';
import { ManageAdvisorComponent } from './login/admin/manage-advisor/manage-advisor.component';
import { ReportBehaviorComponent } from './login/admin/report-behavior/report-behavior.component';
import { UploadFileComponent } from './login/admin/upload-file/upload-file.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'manage-admin',
        component:ManageAdminComponent
      },
      {
        path:'manage-user',
        component:ManageUserComponent
      },
      {
        path: 'mannage-student',
        component:MannageStudentComponent
      },
      {
        path: 'manage-advisor',
        component:ManageAdvisorComponent
      },
      {
        path: 'report-behavior',
        component:ReportBehaviorComponent
      },
      {
        path: 'upload-file',
        component:UploadFileComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
