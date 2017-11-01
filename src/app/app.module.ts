import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { PlaceComponent } from './place/place.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { routing } from './app.routing';
import { EditDataComponent } from './edit-data/edit-data.component';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    PlaceComponent,
    DiscussionComponent,
    EditDataComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
