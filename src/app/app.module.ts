import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { reportAddModule } from './pages/usageReportAdd/report-add.module';
import { SplashScreenModule } from './pages/splash-screen/splash-screen.module';
import { UsageReportModule } from './pages/reports/card/usageReports/usage-reports.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { NavModule } from './pages/nav/nav.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HomeModule,
    LoginModule,
    reportAddModule,
    SplashScreenModule,
    UsageReportModule,
    RegistrationModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
