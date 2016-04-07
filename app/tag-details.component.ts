import {Component, Input} from 'angular2/core';
import {KeysPipe} from './keys.pipe';

@Component({
  selector: 'tag-details',
  template: `
    <div *ngIf="tag" class="details">
      <h2>{{tag.label}}</h2>
      <h4>Details:</h4>
      <div><span>Label:</span> {{tag.label}}</div>
      <div><span>Total Mentions:</span> {{totalMentions()}}</div>
      <div><span>Positive Mentions:</span> {{tag.sentiment.positive || 'none'}}</div>
      <div><span>Neutral Mentions:</span> {{tag.sentiment.neutral || 'none'}}</div>
      <div><span>Negative Mentions:</span> {{tag.sentiment.negative || 'none'}}</div>
      <h4>Page Types:</h4>
      <div *ngFor="#pageType of tag.pageType | keys">
        <span>{{pageType.key}}:</span> {{pageType.value}}
      </div>
    </div>
  `,
  styleUrls: ['app/tag-details.css'],
  pipes: [KeysPipe]
})

export class TagDetailsComponent{
  @Input() tag=null;

  totalMentions() {
    return (this.tag.sentiment.positive || 0) + (this.tag.sentiment.neutral || 0) + (this.tag.sentiment.negative || 0) || 'none';
  }
}