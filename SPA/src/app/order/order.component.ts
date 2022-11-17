import { Component, OnInit } from '@angular/core';
import { apiServer } from '../app-service';
import { ICourse } from '../interfaces/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  course: ICourse[] | null = null;
  errors = false;
  btn = true;
  loading = true;

  constructor(private apiServer: apiServer,
     private route: ActivatedRoute) { }
   _id="6374e71d3495fbdf000badfe";
 

  ngOnInit(): void {
    
    this.apiServer.getCourse(this._id).subscribe({
      next: (value) => {
        this.loading = !this.loading;
        this.course = (value);
        console.log()
        

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })
  }

}
