import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUrlsService {
  constructor(private http: HttpClient) {}

  getCourseDetails(): Observable<any> {
    return this.http.get(environment.baseUrl + 'courses/courseDetails/133');
  }
}
