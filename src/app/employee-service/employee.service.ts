import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {

  constructor(private http: Http) {
  }

  getEmployees(): Observable<any[]> {
    return this.http.get('http://localhost:3000/customers')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  addEmployees(employee): Observable<any> {
    return this.http.post('http://localhost:3000/customers', employee)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

}
