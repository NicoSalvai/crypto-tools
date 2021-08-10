import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './components/plants/plants.component';
import { ConfigComponent } from './components/config/config.component';
import { IndexComponent } from './components/index/index.component';
import { AxieComponent } from './components/axie/axie.component';

const routes: Routes = [
  { path: 'plants', component: PlantsComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'index', component: IndexComponent },
  { path: 'axie', component: AxieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
