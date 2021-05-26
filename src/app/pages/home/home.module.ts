import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { LoginModule } from '../login/login.module';
import { NavModule } from '../nav/nav.module';
import { RegistrationModule } from '../registration/registration.module';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { reportAddModule } from '../usageReportAdd/report-add.module';
import { UsageReportModule } from '../reports/card/usageReports/usage-reports.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    OnHoverModule,
    SplashScreenModule,
    LoginModule,
    NavModule,
    RegistrationModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    reportAddModule,
    UsageReportModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
