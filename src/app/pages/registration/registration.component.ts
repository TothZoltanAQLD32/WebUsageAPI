import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Output() callSelectPage = new EventEmitter<string>();
  form: FormGroup = new FormGroup({
    email: new FormControl("minta@gmail.com", Validators.required),
    password: new FormControl("*****", Validators.required),
    emailAgain: new FormControl(null),
    passwordAgain: new FormControl(null)
  });

  success?: null | boolean;
  errorMessage?: null | string;

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    if(this.form.get("email")?.value != this.form.get("emailAgain")?.value){
      this.errorMessage = "A két email cím nem egyezik!";
      return;
    } else if(this.form.get("password")?.value != this.form.get("passwordAgain")?.value){
      this.errorMessage = "A két jelszó nem egyezik!";
      return;
    } else if(this.form.get("password")?.value.length < 6){
      this.errorMessage = "Túl rövid jelszó! Legalább 6 karakternek kell lennie.";
      return;
    }

    this.angularFireAuth.createUserWithEmailAndPassword(this.form.get("email")?.value, this.form.get("password")?.value).then(res => {
      console.log('You are Successfully signed up!', res);
      this.success = true;
    }).catch(error => {
      console.log('Something is wrong:', error.message);
      this.errorMessage = "A regisztráció nem sikerült, a megadott email már lehet foglalt.";
      this.success = false;
    });
  }

}
