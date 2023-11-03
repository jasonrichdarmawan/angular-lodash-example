import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lodash',
    loadChildren: () => import("./l1/l1.module").then(m => m.L1Module),
  },
  {
    path: 'lodash-es-1',
    loadChildren: () => import("./les1/les1.module").then(m => m.Les1Module),
  },
  {
    path: 'lodash-es-2',
    loadChildren: () => import("./les2/les2.module").then(m => m.Les2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
