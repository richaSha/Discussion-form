import { Component } from '@angular/core';
import {Discussion} from './discussion.model';
import {DISCUSSION} from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discussion Forum';
}
