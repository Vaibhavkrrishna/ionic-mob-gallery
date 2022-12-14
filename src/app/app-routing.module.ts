import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'selectasset',
    loadChildren: () => import('./selectasset/selectasset.module').then( m => m.SelectassetPageModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then( m => m.MaterialPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
