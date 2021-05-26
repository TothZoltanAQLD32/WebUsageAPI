import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Category } from './../../shared/models/category.model';
import { CATEGORIES } from 'src/app/shared/database/category.database';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  @Output() callSelectC = new EventEmitter<string>();
  @Input() categories?: Category[];
  categorys = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }



}
