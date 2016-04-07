import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {TagService} from './tag.service';
import {TagDetailsComponent} from './tag-details.component';

@Component({
  selector: 'tag-info',
  template: `
    <div *ngIf="tag">
      <h2>Tag Information</h2>
      <tag-details [tag]="tag"></tag-details>
      <button (click)="goHome()">Home</button>
    </div>
  `,
  directives: [TagDetailsComponent]
})

export class TagInfoComponent implements OnInit {
  tag = null;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _tagService: TagService) {}

  ngOnInit() {
    let id = decodeURIComponent(this._routeParams.get('id'));
    this._tagService.getTag(id).then(
      tag => this.tag = tag
    )
  }

  goHome() {
    this._router.navigate(['Home']);
  }

}