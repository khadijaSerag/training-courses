import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrainingCoursesComponent } from './training-courses/training-courses.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SectorsComponent } from './sectors/sectors.component';
import { InHouseTrainingComponent } from './in-house-training/in-house-training.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CourseDetailsFormComponent } from './training-courses/course-details-form/course-details-form.component';
import { PersonalDetailsFormComponent } from './training-courses/personal-details-form/personal-details-form.component';
import { PaymentDetailsComponent } from './training-courses/payment-details/payment-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    TrainingCoursesComponent,
    CertificatesComponent,
    SectorsComponent,
    InHouseTrainingComponent,
    CourseDetailsFormComponent,
    PersonalDetailsFormComponent,
    PaymentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
