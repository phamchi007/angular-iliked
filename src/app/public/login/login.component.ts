import { Component , EventEmitter, OnInit, Input, Output} from "@angular/core"
import { Router } from '@angular/router'
import { DataService } from "../base/data/data.service";
import { Globals } from "../base/data/data.main";

@Component ({
    selector:"app-login",
    templateUrl:'./login.component.html',
    providers: [DataService,Globals]
})

export class PublicLoginComponent implements OnInit{
    @Input('message') message;
    @Output('message') outgoingData = new EventEmitter<string>();
    constructor(
        private router: Router,
        private globals: Globals
    ) {}
    user_name:String = "";
    password:String = "";
    ngOnInit() {
    }
    login(): void{
        this.message = '3333';
        this.outgoingData.emit(this.message);
        //this.router.navigate(['']);
    }
}
