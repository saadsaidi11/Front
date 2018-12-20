import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormsService } from '../../services/forms.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    users: any[] ;

    constructor(private service: FormsService) {}

    
       ngOnInit() {
        
     this.service.getUsers()
    .subscribe(response => {
        this.users = response.json();
    })
       }
            

            
            
        
        
    
        
    
}
