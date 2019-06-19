import { Component, OnInit } from '@angular/core';
import { BtnClick } from '../btn-click';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  secret = true;
  clicks: BtnClick[];
  private timesClicked = 0;

  toggleSecret() {
    ++this.timesClicked;
    this.secret = !this.secret;
    this.clicks.push({date: new Date(), order: this.timesClicked});
  }
  constructor() {
    this.clicks = [];
   }

  ngOnInit() {
  }

}
