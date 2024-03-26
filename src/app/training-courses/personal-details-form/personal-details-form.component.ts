import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { PersonalDetails } from 'src/app/shared/models/PersonalDetails.interface';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
})
export class PersonalDetailsFormComponent implements OnInit {
  @Output() personalDetails: EventEmitter<PersonalDetails> = new EventEmitter();
  @ViewChild('myForm') form!: NgForm;

  fullName: string = '';
  email: string = '';
  mobileNumber: number | null = null;
  country: string = '';
  companyName: string = '';
  comments: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.personalDetails.emit({
      fullName: this.fullName,
      email: this.email,
      mobileNumber: this.mobileNumber,
      country: this.country,
      companyName: this.companyName,
      comments: this.comments,
      isValidForm: this.form.valid,
    });
  }
}
