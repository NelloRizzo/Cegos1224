import { Component, Input, OnInit } from '@angular/core';
import { blog, Post } from '../models/post.model';
import { CommonModule } from '@angular/common';
import { CustomHilightDirective } from '../../directives/custom-hilight.directive';

@Component({
  selector: 'app-post',
  imports: [CommonModule, CustomHilightDirective],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  ngOnInit(): void {
    this.post = blog.filter(p => p.id == this.postId)[0]
  }

  @Input()
  postId: number = 0

  post?: Post

  toggleRead() {
    if (this.post)
      this.post.read = !this.post?.read
  }
}
