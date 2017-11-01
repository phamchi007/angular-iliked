import { Component , OnDestroy} from "@angular/core"
import { Location }                 from '@angular/common';

@Component ({
    selector:"app-base-menu",
    templateUrl:'./menu.component.html',
    styleUrls:['./menu.component.css']
})

export class PublicBaseMenuComponent{
    constructor(
        private location: Location
    ) {}
    menu_status:String= '';
    openMenu(): void{
        this.menu_status = (this.menu_status == '' ? 'open' : '');
    }
    goBack(): void {
        this.location.back();
    }
}
/*$(document).ready(function(){
    $('#nav-menu').click(function(){
        $('ul.nav-list').addClass('open').slideToggle('200');
    });
});*/