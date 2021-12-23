import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { StickyNavModule } from 'ng2-sticky-nav';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { BecomeInstructorPartnerComponent } from './components/common/become-instructor-partner/become-instructor-partner.component';
import { HomePageFiveComponent } from './components/pages/home-page-five/home-page-five.component';
import { CategoriesStyleTwoComponent } from './components/common/categories-style-two/categories-style-two.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { HomefiveCoursesComponent } from './components/pages/home-page-five/homefive-courses/homefive-courses.component';
import { HomefiveMainBannerComponent } from './components/pages/home-page-five/homefive-main-banner/homefive-main-banner.component';
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
import { EditorjsComponent } from './editorjs/editorjs.component';
import { ViewcourseComponent } from './components/pages/viewcourse/viewcourse.component';
import { ViewquizComponent } from './components/pages/viewquiz/viewquiz.component';
import { CertificateComponent } from './components/pages/certificate/certificate.component';
import { ServeyComponent } from './components/pages/servey/servey.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FunfactsComponent,
    BecomeInstructorPartnerComponent,
    HomePageFiveComponent,
    CategoriesStyleTwoComponent,
    FeedbackStyleTwoComponent,
    HomefiveCoursesComponent,
    HomefiveMainBannerComponent,
    InstructorsPageOneComponent,
    InstructorsDetailsPageComponent,
    EventsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    MyCoursesPageComponent,
    EditProfilePageComponent,
    ContactPageComponent,
    ContactcheckComponent,
    UploadComponent,
    AllCoursesPageComponent,
    CoursesDetailsPageComponent,
    MyDashboardPageComponent,
    EditorjsComponent,
    ViewcourseComponent,
    ViewquizComponent,
    CertificateComponent,
    ServeyComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CountUpModule,
    TabsModule,
    NgxScrollTopModule,
    StickyNavModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
