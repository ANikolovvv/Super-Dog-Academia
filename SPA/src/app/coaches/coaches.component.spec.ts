import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { apiServer } from '../app-service';

import { ICoaches } from '../interfaces/coaches';
import { CoachesComponent } from './coaches.component';

describe('CoachesComponent', () => {
  let component: CoachesComponent;
  let fixture: ComponentFixture<CoachesComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: apiServer;


  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new apiServer(httpClientSpy)
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    await TestBed.configureTestingModule({
      declarations: [CoachesComponent],
      providers: [apiServer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#get coaches should return array',

    (done: DoneFn) => {
      const expectedCourses: ICoaches[] =
        [{
          name: 'rex',
          description: 'best',
          imageUrl: 'image',
          year: 10
        },
        {
          name: 'roky',
          description: 'best',
          imageUrl: 'image',
          year: 10
        }];

      httpClientSpy.get.and.returnValue(of(expectedCourses));

      service.loadCoaches().subscribe({
        next: courses => {
          expect(courses)
            .withContext('expected coaches')
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


