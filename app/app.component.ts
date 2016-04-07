import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TagService} from './tag.service';
import {TagsCloudComponent} from './tags-cloud.component';
import {TagInfoComponent} from './tag-info.component';

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: TagsCloudComponent
  },
  {
    path: '/tags/:id',
    name: 'TagDetails',
    component: TagInfoComponent
  }
])

@Component({
  selector: 'demo-app',
  template: `
    <h1>Tag Cloud Test</h1>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, TagService]
})

export class AppComponent {}