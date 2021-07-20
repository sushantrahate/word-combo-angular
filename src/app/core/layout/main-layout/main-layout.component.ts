import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '@common/global-constants';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  SiteTitle: string;

  constructor() {
    this.SiteTitle = GlobalConstants.siteTitle;
  }

  ngOnInit(): void {
  }

}
