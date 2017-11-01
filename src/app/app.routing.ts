import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DiscussionComponent} from './discussion/discussion.component';
import {FoodComponent} from './food/food.component';
import {PlaceComponent} from './place/place.component';
import {DetailComponent} from './detail/detail.component';
const appRoutes: Routes = [
  {
    path : "",
    component : DiscussionComponent
  },
  {
    path: "food",
    component: FoodComponent
  },
  {
    path: "place",
    component: PlaceComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
