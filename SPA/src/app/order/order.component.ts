import { Component, OnInit } from '@angular/core';
import { apiServer } from '../app-service';
import { IOrder } from '../interfaces/course';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { getHistory } from '../+store/selectors';
import { addCourse } from '../+store/actions';

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
  ngSelect: string = 'male';

  course$ = this.store.select(getHistory);
  constructor(private authService: AuthService, private apiServer: apiServer,
    private route: ActivatedRoute, private path: Router,
    private actions$: Actions,
    private store: Store
  ) { }

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
      email: string, tel: string,
      name: string, breed: string,
      age: number, gender: string
    } = form.value;
    const data = {
      email: form.value.email,
      name: form.value.name,
      age: form.value.age,
      breed: form.value.breed,
      gender: form.value.gender,
      tel: form.value.tel,
      title: this.course?.title,
      desc: this.course?.desc,
      imageUrl: this.course?.imageUrl,
      training: this.course?.training,
      price: this.course?.price
    }
    console.log(data, 'asdasdasasasasaa')
    
    // this.course$.subscribe({
    //   next: (value: any | null) => {

    //     console.log(value, 'order')
    //   },
    //   error: (err: any) => {
    //     this.errors = !this.loading;
    //     console.error(err);
    //   }
    // })
    this.authService.createMyCourse(data).subscribe((res: any) => {
      console.log('Course created successfully', res);
      this.store.dispatch(addCourse(res.result))
    })


    this.path.navigate(['/my-course']);
  }
}
