import { Component,OnInit, Input, Output } from '@angular/core';
import {Discussion} from '../discussion.model';
import { EditDataComponent } from '../edit-data/edit-data.component';
import { AddNewComponent } from '../add-new/add-new.component';
import { Router } from '@angular/router';
import {AppService} from '../app.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers:[AppService]
})
export class FoodComponent {
  foodDiscussion: Discussion[];
  constructor(private route: Router, private service:AppService){}
  ngOnInit(){
    this.foodDiscussion = this.service.getDetail();
  }
  category: string ='Food';
  showEdit:boolean =false;
  addNew:boolean =false;
  editFoodData: Discussion;
  toggleDetail(data: Discussion){
    data.show = (data.show ? false : true);
    data.dataIcon = (data.show ? 'glyphicon-minus' : 'glyphicon-plus');
  }
  editData(data: Discussion){
    this.editFoodData = data;
    this.showEdit = true;
  }
  finishedEditing(){
    this.showEdit = false;
  }
  addNewItem(){
    this.addNew =true;
  }
  addNewDiscssion(data: Discussion){
    this.foodDiscussion.push(data);
    this.addNew =false;
  }
  dynamicRouting(foodData: Discussion){
    this.route.navigate(['detail',foodData.id]);
  }

}
