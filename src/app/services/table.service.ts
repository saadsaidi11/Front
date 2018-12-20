import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

 


@Injectable()
export class TableService {
  private url = 'http://10.128.2.87:8000/admin/scrumboard/intersections/' ;
    

  constructor(private http: Http) {}

    

    getTables() {
    return  this.http.get(this.url);
      }
   

}
