import { NgModule, Component , OnInit, Input} from "@angular/core"
import { Member , MemberData}    from './member';
import { FormGroup }                 from '@angular/forms';
import { DataService } from "../base/data/data.service";
import { Globals } from "../base/data/data.main";

@Component ({
    selector:"app-member",
    templateUrl:'./member.component.html',
    styleUrls:['./member.component.css'],
    providers: [Globals]
})

export class PublicMemberComponent implements OnInit{

    message: string;
    constructor(
        private globals: Globals
    ) { 
    }
    ngOnInit() {}
    form: FormGroup;
    member = new Member(0, '', '');
    memberDatas = MemberDatas;
    
    openCreate(): void{
        this.memberDatas.push(this.member.getMember());
        this.globals.setdata();
    };
    
    openEdit(item:object): void{
        this.member.setMember(item);
        this.message = 'test';
    };
    getMember(){
        this.memberDatas;
    }
    public handleEvent(childData:any){console.log(childData);
		this.message = childData;
	}
}

const MemberDatas: MemberData[] = [];
