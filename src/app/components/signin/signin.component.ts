import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SigninService]
})
export class SigninComponent implements OnInit {

  constructor(private sign_in_service: SigninService) { }

  ngOnInit() {
  }

  onSubmit(formSignIn) {
    this.sign_in_service.sendPost(formSignIn.value)
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }
}
