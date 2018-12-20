import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MyInterface } from './MyInterface' ;
import { Http, RequestOptions, Headers  } from '@angular/http' ;
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})



export class ChartsComponent   {
   
    options:{headers:Headers} = {headers : null};
    constructor(public http: Http) {}
    private url= 'http://10.128.2.87:8000/scrumboard/urgences' ;
    

    onSubmit(person: MyInterface){
        
        this.http.patch(this.url + '/' + person.id + '/', JSON.stringify({"Urgence_Nord": person.Urgence_Nord}),new RequestOptions({ headers: new Headers({ 
            'Content-Type': 'application/json'
           }) }))
        .subscribe(status=> 
            console.log(JSON.stringify(status)));
      }

}
