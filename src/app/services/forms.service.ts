import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class FormsService {

  

    private url = 'http://10.128.2.87:8000/admin/scrumboard/utilisateurs/' ;
    

    constructor(private http: Http) {}
  
      
  
      getUsers() {
      return  this.http.get(this.url);
        }
   

}
