import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup;

  constructor(private form_build: FormBuilder) { }

  ngOnInit() {
    this.formSignUp = this.form_build.group({
      email: ['', [Validators.required, gmailValidator]],
      password: '',
      subjects: this.form_build.group({
        nodeJS: false,
        angular: false,
        reactJS: true
      })
    });
  }

  onSubmit() {
    console.log(this.formSignUp.value);
  }
}

function gmailValidator(form_control: FormControl) {
  if(form_control.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true };
}
