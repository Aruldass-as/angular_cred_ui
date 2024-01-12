import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { catchError, map } from 'rxjs/operators';
// import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(public http: HttpClient) { }

  getApiData(){
    return this.http.get('//jsonplaceholder.typicode.com/users');

    // return this.http.get('//jsonplaceholder.typicode.com/users')
    //   .pipe(map((data: any) => {
    //     return data;
    //   }),
    //     catchError((error) => {    // handle error
         
    //       if (error.status == 404) {
    //         //Handle Response code here
    //       }
    //       return throwError(error);
    //     })
    //   );
  }
}
