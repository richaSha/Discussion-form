import { Component, Input, Output } from '@angular/core';
import {Discussion} from '../discussion.model';
import { EditDataComponent } from '../edit-data/edit-data.component';
import { AddNewComponent } from '../add-new/add-new.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  category: string ='Food';
  showEdit:boolean =false;
  addNew:boolean =false;
  editFoodData :Discussion;
  foodDiscussion: Discussion[] = [
    {
      delete: false,
      category: 'food',
      title: 'Best indian food in seattle',
      discussion:'Kasturi grill and dawant in seattle downtwon serve awesome indian food',
      show: false,
      dataIcon: 'glyphicon-plus'
    },
    {
      delete: false,
      category: 'food',
      title: 'Best Thai food in seattle',
      discussion:'Noi Thai serve awesome pad thai and pinneapple rice',
      show: false,
      dataIcon: 'glyphicon-plus'
    }
  ];
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

}
