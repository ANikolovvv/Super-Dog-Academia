import { Component, OnInit } from '@angular/core';
import { apiServer } from '../app-service';
import { IOrder } from '../interfaces/course';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id']
    })

    this.apiServer.getCourse(this.id).subscribe({
      next: (value: any) => {
        this.loading = !this.loading;
        this.course = value;

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })
  }
  nandlerFormOrder(form: NgForm) {
    const value: {
      email: string, tel: number,
      name: string, breed: string,
      age: number, gender: string
    } = form.value;
    console.log(value)
  }
}
