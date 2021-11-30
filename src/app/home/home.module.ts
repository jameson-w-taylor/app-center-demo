import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { AppCenterAnalytics } from '@awesome-cordova-plugins/app-center-analytics/ngx';
import { AppCenterCrashes } from '@awesome-cordova-plugins/app-center-crashes/ngx';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [AppCenterAnalytics, AppCenterCrashes],
  declarations: [HomePage]
})
export class HomePageModule {}
