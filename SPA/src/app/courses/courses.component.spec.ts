import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { apiServer } from '../app-service';
import { ICourses } from '../interfaces/courses';


import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: apiServer;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new apiServer(httpClientSpy)
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    await TestBed.configureTestingModule({
      declarations: [CoursesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('#get courses should return array',

  (done: DoneFn) => {
    const expectedCourses: ICourses[] =
      [{ _id: 'zerooo',
        title: 'one',
        training: ['uuuu'],
        imageUrl: 'image',
        price: 10,
        desc: 'descrrr'}, { _id: '_www',
          title: 'two',
          training:['gggg'],
          imageUrl: 'refff',
          price: 10,
          desc: 'ttttt' }];
  
    httpClientSpy.get.and.returnValue(of(expectedCourses));
  
    service.loadCourses().subscribe({
      next: courses => {
        expect(courses)
          .withContext('expected courses')
          .toEqual(expectedCourses);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});

