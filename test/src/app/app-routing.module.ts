import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EstimateinfoComponent } from './estimateinfo/estimateinfo.component';
import { ViewComponent } from './view/view.component';
import { RefferenceComponent } from './refference/refference.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'estimateinfo',
    component: EstimateinfoComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'refference',
    component: RefferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
