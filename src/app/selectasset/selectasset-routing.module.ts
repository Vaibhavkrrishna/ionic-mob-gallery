import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectassetPage } from './selectasset.page';

const routes: Routes = [
  {
    path: '',
    component: SelectassetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectassetPageRoutingModule {}
