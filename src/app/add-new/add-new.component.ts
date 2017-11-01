import { Component, Output, EventEmitter} from '@angular/core';
import {Discussion} from '../discussion.model';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  @Output() addNew = new EventEmitter();
  submit(title:string, discussion:string){
    let newObj:Discussion  = new Discussion('food',title,discussion)
    this.addNew.emit(newObj);
  }

}
