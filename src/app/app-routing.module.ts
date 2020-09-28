import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components';
import { CategoryResolver } from './services/category.resolver';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:categoryId', component: HomeComponent, resolve: { CategoryResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
