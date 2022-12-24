import { Component, OnInit } from '@angular/core';
import { apiServer } from '../app-service';
import { IBlog } from '../interfaces/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog: IBlog[] | null = null;
  errors = false;
  btn = true;
  loading = true;
  constructor(private api:apiServer){}
  ngOnInit(): void {
    this.api.getBlogs().subscribe({
      next: (value) => {
        this.loading = !this.loading;
        this.blog = value;
        console.log(this.blog)

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })
  }

}
