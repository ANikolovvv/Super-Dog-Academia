import { Component, OnInit } from '@angular/core';
import { apiServer } from '../app-service';
import { IOrder } from '../interfaces/course';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

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

  constructor(private authService: AuthService,private apiServer:apiServer,
    private route: ActivatedRoute,private path:Router) { }

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
     const data={
        email:form.value.email,
        name:form.value.name,
        age:form.value.age,
        breed:form.value.breed,
        gender:form.value.gender,
        tel:form.value.tel,
        title:this.course?.title,
        desc:this.course?.desc,
        imageUrl:this.course?.imageUrl,
        training:this.course?.training,
        price:this.course?.price
     }
    console.log(data,'asdasdasasasasaa')
     this.authService.createMyCourse(data).subscribe((res:any)=>{
          console.log('Course created successfully',res);
     })
   
    
    this.path.navigate(['/my-course']);
  }
}
