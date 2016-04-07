import {Injectable} from 'angular2/core';
import {Tags} from './tags';

@Injectable()

export class TagService{
  getTags() {
    return Promise.resolve(Tags);
  }

  getTag(id: string) {
    return Promise.resolve(Tags).then(
      tags => tags.filter(tag => tag.id === id)[0]
    );
  }
}