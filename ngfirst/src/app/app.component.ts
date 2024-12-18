import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './sample/sample/sample.component';
import { PostComponent } from './blog/post/post.component';
import { CommonModule } from '@angular/common';
import { Post } from './blog/models/post.model';
import { FilterPipe } from './pipes/filter.pipe';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FilterPipe, RouterOutlet, FormsModule, SampleComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  message: string = 'Guardate che Spettacolo!!!';
  private start: number = 0;

  blog: Array<Post> = []

  numbers = Array.from({ length: 100 }).map((_, i) => i)

  model = {
    title: 'Prima Applicazione Angular',
    subtitle: this.message,
    timing: 500,
    color: '#000000',
  };

  slider() {
    this.model.subtitle =
      this.message.slice(this.start) + ' ' + this.message.slice(0, this.start);
    if (this.start < this.message.length) this.start++;
    else this.start = 0;
    setTimeout(() => this.slider(), this.model.timing);
  }

  increment() {
    this.model.timing++;
  }

  constructor(private service: BlogService) {
    console.log("Costruttore")
  }

  ngOnDestroy(): void {
    console.log('Componente distrutto')
  }

  ngOnInit(): void {
    console.log('Componente inizializzato')
    this.slider();
    this.blog = this.service.getBlog()
  }

  handleChildEvent(m: string) {
    console.log(m)
    this.message = m
  }
}
