import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-details-form',
  templateUrl: './course-details-form.component.html',
  styleUrls: ['./course-details-form.component.scss'],
  providers: [DatePipe],
})
export class CourseDetailsFormComponent {
  @Input() courseDetails: any = {};

  constructor(private datePipe: DatePipe) {}

  formattedStartDate(): string {
    if (this.courseDetails.course_date) {
      const startDate = this.courseDetails.course_date;
      return this.datePipe.transform(startDate, 'yyyy-MM-dd') || '';
    }
    return '';
  }
}
