import { Injectable } from "@angular/core";


@Injectable()
export class Globals {

  role:String = 'test OK';
  setdata():void{
      this.role = "changed";
  }

}