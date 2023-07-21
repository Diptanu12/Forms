import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularForms';
  Firstname? :string;
  Lastname ?: string;
  email?: string;
  gen?:  string;
  country?: string;
  hobbies?: string;

  defaultGender = 'Male';

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];

  @ViewChild('myForm') form: NgForm | any;

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.form);

    this.Firstname=this.form.value.personalDetails.firstname;
    this.Lastname=this.form.value.personalDetails.lastname;
    this.email=this.form.value.personalDetails.email;
    this.gen=this.form.value.gender;
    this.country=this.form.value.country;
    this.hobbies=this.form.value.hobby;

    this.form.reset();
  }
  defaultCountry = 'india';

  setDefaultValues() {
    // this.form.value.personalDetails.Firstname='Diptanu';
    // this.form.value.personalDetails.Lastname='Baidya';
    // this.form.value.personalDetails.email='abc@gmail.com';
    // this.form.setValue({
    //   country: '',
    //   gender : '',
    //   hobby: '',
    //   personalDetails:{
    //   firstname: 'Diptanu',
    //   lastname: 'Baidya',
    //   email: 'abc@gmail.com',
    //   }
    // })

    this.form.form.patchValue({
      personalDetails: {
        firstname: 'Diptanu',
        lastname: 'Baidya',
        email: 'abc@gmail.com',
      },
    });
  }
}
