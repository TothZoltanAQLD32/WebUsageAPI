import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { OnHoverModule } from './../../shared/directives/on-hover/on-hover.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, MatRippleModule, FormsModule, OnHoverModule, MatCardModule
  ],
  exports: [SplashScreenComponent]
})
export class SplashScreenModule { }
