import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectassetPageRoutingModule } from './selectasset-routing.module';

import { SelectassetPage } from './selectasset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectassetPageRoutingModule
  ],
  declarations: [SelectassetPage]
})
export class SelectassetPageModule {
}
