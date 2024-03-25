import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrainingCoursesComponent } from './training-courses/training-courses.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SectorsComponent } from './sectors/sectors.component';
import { InHouseTrainingComponent } from './in-house-training/in-house-training.component';

const routes: Routes = [
  { path: '', redirectTo: 'training-Course', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about-Us', component: AboutUsComponent },
  { path: 'training-Course', component: TrainingCoursesComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'sectors', component: SectorsComponent },
  { path: 'in-House-Training', component: InHouseTrainingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
