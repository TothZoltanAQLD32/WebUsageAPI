import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Key } from 'selenium-webdriver';
import { AngularFireAuth } from "@angular/fire/auth";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() callSelectPage = new EventEmitter<string>();
  form: FormGroup = new FormGroup({
    email: new FormControl("minta@gmail.com", Validators.required),
    password: new FormControl("*****", Validators.required),
  });
  
  //Hostlistener to login when ENTER is pressed
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.keyCode === KEY_CODE.ENTER){
      this.firebaseLogin();
    }
  }

  errorMessage?: null | string;

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  firebaseLogin(): void {
    this.angularFireAuth.signInWithEmailAndPassword(this.form.get("email")?.value, this.form.get("password")?.value).then(res => {
      console.log('You are Successfully logged in!');
      this.callSelectPage.emit('home');
    }).catch(err => {
      console.log('Valami nem volt jó a bejelentkezés során: ' + err.message);
      this.errorMessage = "Helytelen email címet vagy jelszót adott meg a belépés során.";
    });
  }

  firebaseLoginAnonymous(): void {
    this.angularFireAuth.signInAnonymously().then(res => {
      console.log('You are Successfully logged in!');
      this.callSelectPage.emit('home');
    }).catch(err => {
      console.log('Valami nem volt jó a bejelentkezés során: ' + err.message);
      this.errorMessage = "Vendégként most nem tud belépni. Kérem regisztráljon!";
    });
  }

}

//We import KEY_CODES Separetely
export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ENTER = 13,
}
