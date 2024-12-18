import { Injectable } from '@angular/core';
import { blog, Post } from '../blog/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlog(): Array<Post> { return blog }
}
