import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICoaches } from './interfaces/coaches';
import { ICourses } from './interfaces/courses';


const url = environment.url;

@Injectable({
    providedIn: 'root'
})

export class apiServer {
    constructor(private httpClient: HttpClient) { }

    loadCoaches() {
        return this.httpClient.get<ICoaches[]>(`${url}/trainer`);
    }
    loadCourses(){
        return this.httpClient.get<ICourses[]>(`${url}/trainer/cours`)
    }
   
}