import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-breadcrumbs',
  templateUrl: './nav-breadcrumbs.component.html',
  styleUrls: ['./nav-breadcrumbs.component.scss']
})
export class NavBreadcrumbsComponent implements OnInit {

  crumbsArray: string[] = [];

  @Input()
  title: string;

  constructor(private router: Router) {
    this.setBreadcrumbs();
  }

  ngOnInit() {
  }

  pushToBredArray(array: string[]) {
    array.forEach(elem => {
      if (elem.length > 0) {
        this.crumbsArray.push(elem);
      }
    });
  }

  setBreadcrumbs() {
    const path = this.router.url;
    this.pushToBredArray(path.split('/'));
  }


}
