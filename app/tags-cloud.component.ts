import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {TagService} from './tag.service';
import {TagDetailsComponent} from './tag-details.component'

@Component({
  selector: 'tags-cloud',
  template: `
    <h3>Popular Tags</h3>
    <span *ngFor="#tag of tags" class="tag" [style.fontSize]="tagSize(tag)" (click)="selectTag(tag)">
      {{tag.label}}
    </span>

    <div *ngIf="selectedTag">
      <tag-details [tag]="selectedTag"></tag-details>
      <button (click)="viewDetails(selectedTag)">View Details</button>
    </div>
  `,
  styleUrls: ['app/tags-cloud.css'],
  directives: [TagDetailsComponent]
})

export class TagsCloudComponent implements OnInit{
  tags = null;
  selectedTag = null;

  constructor(
    private _router: Router,
    private _tagService: TagService) {}

  tagSize(tag) {
    return tag.sentimentScore/100 + 0.5 + 'em'; // 0 = .5em; 50 = 1em; 100 = 1.5em; 150 = 2em;
  }

  selectTag(tag) {
    this.selectedTag = tag;
  }

  viewDetails(tag) {
    this._router.navigate(['TagDetails', {id: tag.id}]);
  }

  ngOnInit() {
    this._tagService.getTags().then(
      tags => this.tags = tags
    );
  }
}