import { Component, OnInit } from '@angular/core';
import { apiServer } from '../app-service';
import { IOrder } from '../interfaces/course';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  course: IOrder | null = null;
  errors = false;
  btn = true;
  loading = true;
  id: string = '';
  constructor(private apiServer: apiServer,
    private route: ActivatedRoute) { }
  // _id="6374e71d3495fbdf000badfe";


  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id']
    })
    console.log(this.id, 'paramsss78')
    this.apiServer.getCourse(this.id).subscribe({
      next: (value: any) => {
        this.loading = !this.loading;
        this.course = value;
        console.log()

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })
  }

}
