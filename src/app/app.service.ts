import { Injectable } from '@angular/core';
import {DISCUSSION} from './app.data';

@Injectable()
export class AppService {
  constructor() { }
  getDetail(){
    return DISCUSSION;
  }
}
