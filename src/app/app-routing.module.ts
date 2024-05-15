import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { FoodComponent } from './food/food.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { TravelComponent } from './travel/travel.component';
import { ProjectComponent } from './project/project.component';
import { KingComponent } from './king/king.component';

const routes: Routes = [{
  path: '',
  component: HeaderComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'show',
      component: ShowComponent
    },
    {
      path: 'food',
      component: FoodComponent
    },
    {
      path: 'knowledge',
      component: KnowledgeComponent
    },
    {
      path: 'location',
      component: TravelComponent
    },
    {
      path: 'king-project',
      component: ProjectComponent
    },
    {
      path: 'king-knowledge',
      component: KingComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
