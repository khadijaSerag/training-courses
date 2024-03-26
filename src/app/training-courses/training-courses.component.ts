import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiUrlsService } from '../shared/services/api-urls.service';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { PersonalDetails } from '../shared/models/PersonalDetails.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-training-courses',
  templateUrl: './training-courses.component.html',
  styleUrls: ['./training-courses.component.scss'],
})
export class TrainingCoursesComponent implements OnInit {
  courseDetails: any = {};
  courseFormData: any = {};

  personalDetails: PersonalDetails = {
    fullName: '',
    email: '',
    mobileNumber: 0,
    country: '',
    companyName: '',
    comments: '',
    isValidForm: '',
  };

  @ViewChild(PersonalDetailsFormComponent)
  personalComponent!: PersonalDetailsFormComponent;

  constructor(
    private apiService: ApiUrlsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCourseDetails();
  }

  fillCourseFormData() {
    if (this.courseDetails) {
      this.courseFormData.course_code = this.courseDetails.course_code;
      this.courseFormData.course_name = this.courseDetails.course_name;
      this.courseFormData.language_id = this.courseDetails.language_id;

      if (
        this.courseDetails.course_enrollments &&
        this.courseDetails.course_enrollments.length > 0
      ) {
        this.courseFormData.course_type =
          this.courseDetails.course_enrollments[0].type_name;
        this.courseFormData.course_location =
          this.courseDetails.course_enrollments[0].english_name;
        this.courseFormData.course_fees =
          this.courseDetails.course_enrollments[0].fees;
        this.courseFormData.course_date =
          this.courseDetails.course_enrollments[0].start_date;
      }
    }
  }

  getCourseDetails() {
    this.apiService.getCourseDetails().subscribe((res: any) => {
      // console.log('result', res);
      this.courseDetails = res;
      this.fillCourseFormData();
    });
  }

  getPersonalDetails(event: any) {
    this.personalDetails = event;
  }

  bookCourse() {
    this.personalComponent.onSubmit();
    if (!this.personalDetails.isValidForm) {
      this.toastr.warning(
        'You should complete all data in Personal Dtails Form',
        'Booking warning'
      );
    } else {
      console.log('CourseDetailsForm : ', this.courseFormData);
      console.log('PersonalDetails : ', this.personalDetails);
      this.toastr.success('You are Booking this Course', 'Booking Success');
    }
  }
}
