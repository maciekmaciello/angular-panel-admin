import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-breadcrumbs',
  templateUrl: './nav-breadcrumbs.component.html',
  styleUrls: ['./nav-breadcrumbs.component.scss']
})
export class NavBreadcrumbsComponent implements OnInit {

  crumbsArray: Array<{ name: string, path: string }> = [];
  path: string;

  @Input()
  title: string;

  constructor(private router: Router) {
    this.setBreadcrumbs();
  }

  ngOnInit() {
  }

  createPath(elem: string) {
    if (this.path) {
      return this.path = `${this.path}/${elem}`;
    }
    this.path = `/${elem}`;
    return `/${elem}`;
  }

  pushToBredArray(array: string[]) {
    array.forEach(elem => {
      if (elem.length > 0) {
        const path = this.createPath(elem);
        this.crumbsArray.push({ name: elem, path });
      }
    });
  }

  setBreadcrumbs() {
    const path = this.router.url;
    this.pushToBredArray(path.split('/'));
  }


}
