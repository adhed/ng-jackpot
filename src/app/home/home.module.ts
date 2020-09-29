import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriesComponent, GameComponent, GameLabelComponent, GameRibbonComponent, GamesListComponent, HomeComponent } from './components';
import { CategoryResolver } from './resolvers';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'category/:categoryId',
    component: HomeComponent,
    resolve: { CategoryResolver },
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    GamesListComponent,
    GameComponent,
    CategoriesComponent,
    GameLabelComponent,
    GameRibbonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class HomeModule {}
