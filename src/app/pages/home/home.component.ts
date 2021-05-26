import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SkipSelf } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { REPORTS } from 'src/app/shared/database/usage_reports.database';
import { usage_reports } from '../../shared/models/usage_reports.model';
import { reportAddComponent } from '../usageReportAdd/report-add.component';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  categories = CATEGORIES;
  usage_reports?: Observable<usage_reports[]> | null = null;
  usage_reports_database = REPORTS;
  high_usage_reports: any;
  favorites: any;
  category? = '';
  page = 'home';
  detailData: any;
  queryNext?: boolean;

  constructor(private dialog: MatDialog, private service: FbBaseService) { }

  ngOnInit(): void {
    this.queryNext = false;
    this.category = 'reports';
    this.queryData();
    this.queryHighUsages();
    this.queryFavorites();
  }

  ngOnChanges(): void{
    this.queryData();
    this.queryHighUsages();
    this.queryFavorites();
  }

  queryData(): void {
    let current_usage_reports = this.service.get('usage_reports');
    if(current_usage_reports != null){
      this.usage_reports = current_usage_reports;
    } else{
      this.usage_reports = this.usage_reports_database as any;
    }
    
  }

  queryHighUsages(): void{
    let current_usage_reports = this.service.getHighUsages('usage_reports');
    if(current_usage_reports != null){
      this.high_usage_reports = current_usage_reports;
    } else{
      console.log("Váratlan hiba történt, vagy nincs 25Gb adatot meghaladó tevékenység.")
    }
  }

  queryFavorites(): void{
    let current_usage_reports = this.service.getFavorites('usage_reports');
    if(current_usage_reports != null){
      this.favorites = current_usage_reports;
    } else{
      console.log("Váratlan hiba történt, vagy nincs 25Gb adatot meghaladó tevékenység.")
    }
  }

  ngOnDestroy(): void {
    delete this.category;
    delete this.usage_reports;
  }

  onSelectPage(event: string): void{
    if(event){
      this.page = event;
    }
    else{
      this.page = '';
    }
  }

  onSelectCategory(event: string): void{
    if(event){
      this.category = event;
    } else{
      this.category = '';
    }
  }

  //Beszúrás
  openDialog(): void {
    const dialogRef = this.dialog.open(reportAddComponent, {});
    dialogRef.afterClosed().subscribe((report: usage_reports) => {
      if (report && report?.name) {
        report.star = false;
        this.service.add('usage_reports', report)
      }
    }, err => {
      console.log("Hiba történt, próbálja újra a tevékenység felvételét!")
    });
  }
}
