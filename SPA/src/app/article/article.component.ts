import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiServer } from '../app-service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  blog:any
  errors = false;
  loading: boolean = true;
  num: string = '';
  info:any;
  constructor(private api: apiServer, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.num = this.route.snapshot.params['id'];
    console.log(this.num)
    this.api.getBlogs().subscribe({
      next: (value) => {
        this.loading = !this.loading;
        this.blog = value;
        this.info=value.find((p) => p._id == this.num);
        console.log(this.info,'info')

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })
  }
 

}
