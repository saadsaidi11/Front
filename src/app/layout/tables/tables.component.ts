import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TableService } from '../../services/table.service';
import { Observable } from 'rxjs';




@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    
    
    interval: any;
    posts: any[];
    
    constructor(private service: TableService) {
                    }

    ngOnInit() {
        
            

        this.refreshData();
        this.interval = setInterval(() => { 
            this.refreshData(); 
        }, 1000);
    
    }

    refreshData(){
        this.service.getTables()
            .subscribe(response => {
                this.posts = response.json();
            })
        }

        /*updadatePost(post) {
            this.http.patch(this.url, JSON.stringify({'getLight': 1})) 
            .subscribe(response =>{
                console.log(response.json()) ;
            });
        }*/

    /*this.service.getTables()
    .subscribe(response => {
        this.posts = response.json();*/
    
   
}
