import { Component, Input, OnInit } from '@angular/core';
import { usage_reports } from 'src/app/shared/models/usage_reports.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { reportAddComponent } from 'src/app/pages/usageReportAdd/report-add.component';

@Component({
  selector: 'usage-reports-card',
  templateUrl: './usage-reports.component.html',
  styleUrls: ['./usage-reports.component.scss']
})
export class UsageReportsComponent implements OnInit {
  @Input() report?: usage_reports;

  constructor(private dialog: MatDialog, private service: FbBaseService) { }

  ngOnInit(): void {
  }

  deleteRecord(collectionName: string, docId: any): void {
    this.service.delete(collectionName, docId);
  }

  addFavorite(report: usage_reports): void {
    if(!report.star){
      report.star = true;
      this.service.update('usage_reports', report.docId, report);
    } else{
      report.star = false;
      this.service.update('usage_reports', report.docId, report);
    }
  }

  openDiag(docId: any, name: any, effectiveDate: any, href: any, dataConsumption: any, id: any, imageResource: any, description: any): void {
    const dialogRef = this.dialog.open(reportAddComponent, {
      data: { name: name, 
      effectiveDate: effectiveDate,
      href: href,
      dataConsumption: dataConsumption,
      id: id,
      imageResource: imageResource,
      description: description
      },
    });
    dialogRef.afterClosed().subscribe((report: usage_reports) => {
      report.docId = docId;
      if (report && report?.name) {
        this.service.update('usage_reports', report.docId, report)
      }
    }, err => {
      console.log("Hiba történt, próbálja újra a tevékenység frissítését!")
    });
  }

}
