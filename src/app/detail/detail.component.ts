import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {AppService} from '../app.service';
import {Discussion} from '../discussion.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AppService]
})
export class DetailComponent implements OnInit {
  deatailId :number;
  dataArray:Discussion[];
  constructor(private route: ActivatedRoute, private location: Location, private service:AppService) { }

  ngOnInit() {
    this.route.params.forEach((urlparameters)=>{
      this.deatailId = Number(urlparameters['id']);
    })
    this.dataArray = this.service.getDetail()
  }

}
