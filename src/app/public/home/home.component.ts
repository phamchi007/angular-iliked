import { Component } from "@angular/core"

@Component ({
    selector:"app-home",
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.css']
})

export class PublicHomeComponent{
    hoten:String = "Chi Pham";
    homeiconlist = HomeIConList;
    selectedHomeicon = {};

    onSelect(homeicon: HomeICon): void{
        this.selectedHomeicon = homeicon;
    }
}

export class HomeICon{
  icon_title: string;
  icon_url: string;
  icon_image_url: string;
}

const HomeIConList:HomeICon[] = [
    {icon_title:'ICon 1', icon_url:'localhost', icon_image_url:'icon.png'},
    {icon_title:'ICon 2', icon_url:'localhost', icon_image_url:'icon.png'},
    {icon_title:'ICon 3', icon_url:'localhost', icon_image_url:'icon.png'}
    ];