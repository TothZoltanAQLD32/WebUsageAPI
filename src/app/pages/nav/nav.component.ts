
import { Category } from 'src/app/shared/models/category.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() sCategoryTitle?: string;
  @Input() categories: Category[] = [];
  @Input() selectedCategory?: string;
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectC = new EventEmitter<string>();

  currentUser?: null | any;

  constructor(private firebase: FirebaseApp) { }

  ngOnInit(): void {
    this.currentUser = this.firebase.auth().currentUser?.email
  }

  select(target: string): void{
    this.callSelectC.emit(target);
  }

  logoutFireBase(): void{
    this.callSelectPage.emit('');
    this.firebase.auth().signOut().then(err => {
      console.log("Signout failed");
    });
  }
}
