import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Discussion} from '../discussion.model';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent {
  @Input() childEditData:Discussion;
  @Output() doneEditing = new EventEmitter();
  EditDone(){
    this.doneEditing.emit()
  }
}
