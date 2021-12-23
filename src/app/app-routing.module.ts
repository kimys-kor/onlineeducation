import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageFiveComponent } from './components/pages/home-page-five/home-page-five.component';
import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { MyCoursesPageComponent } from './components/pages/mycourses-page/mycourses-page.component';
import { EditProfilePageComponent } from './components/pages/editprofile-page/editprofile-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { ContactcheckComponent } from './components/pages/contactcheck/contactcheck.component';
import { UploadComponent } from './components/pages/upload/upload.component';
import { AllCoursesPageComponent } from './components/pages/allcourses-page/allcourses-page.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { MyDashboardPageComponent } from './components/pages/my-dashboard-page/my-dashboard-page.component';
import { ViewcourseComponent } from './components/pages/viewcourse/viewcourse.component';
import { ViewquizComponent } from './components/pages/viewquiz/viewquiz.component';
import { CertificateComponent } from './components/pages/certificate/certificate.component';
import { ServeyComponent } from './components/pages/servey/servey.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';


const routes: Routes = [
    //{path: '', component: HomePageOneComponent},
    //{path: '', redirectTo:'/main', pathMatch: 'full'},    
    {path: '', component: HomePageFiveComponent},
    {path: 'instructor', component: InstructorsPageOneComponent},
    {path: 'single-instructor', component: InstructorsDetailsPageComponent},
    {path: 'events', component: EventsPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'error-404', component: ErrorPageComponent},
    {path: 'allcourses', component: AllCoursesPageComponent},
    {path: 'single-courses/:id', component: CoursesDetailsPageComponent},
    {path: 'my-dashboard', component: MyDashboardPageComponent},
    {path: 'mycourses', component: MyCoursesPageComponent},
    {path: 'editprofile', component: EditProfilePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'contactcheck', component: ContactcheckComponent},
    {path: 'viewcourse/:id', component: ViewcourseComponent},
    {path: 'viewquiz/:id', component: ViewquizComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'certificate', component: CertificateComponent},
    {path: 'survey', component: ServeyComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }