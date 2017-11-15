import { NgModule, Component , OnInit, Input} from "@angular/core"
import { Member , MemberData}    from './member';
import { FormGroup }                 from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DataService } from "../base/data/data.service";


@Component ({
    selector:"app-member",
    templateUrl:'./member.component.html',
    styleUrls:['./member.component.css'],
    
})

export class PublicMemberComponent implements OnInit{

    message: string;
    
    ngOnInit() {}
    member = new Member(0, '', '');
    memberDatas = MemberDatas;
    
    openCreate(): void{
        this.memberDatas.push(this.member.getMember());
        
    };
    
    openEdit(item:object): void{
        this.member.setMember(item);
        this.message = 'test';
    };
    getMember(){
        this.memberDatas;
    }
}

const MemberDatas: MemberData[] = [];
