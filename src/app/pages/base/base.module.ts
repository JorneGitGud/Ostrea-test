import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasePageRoutingModule } from './base-routing.module';

import { BasePage } from './base.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasePageRoutingModule,
    SharedModule
  ],
  declarations: [BasePage]
})
export class BasePageModule {}
