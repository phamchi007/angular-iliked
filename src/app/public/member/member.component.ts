import { NgModule, Component , OnInit, Input} from "@angular/core"
import { Member , MemberData}    from './member';
import { FormGroup }                 from '@angular/forms';

@Component ({
    selector:"app-member",
    templateUrl:'./member.component.html',
    styleUrls:['./member.component.css']
})

export class PublicMemberComponent{
    form: FormGroup;
    member = new Member(0, '', '');
    memberDatas = MemberDatas;

    openCreate(): void{
        this.memberDatas.push(this.member.getMember());
    };
    
    openEdit(item:object): void{
        this.member.setMember(item);
    };
}

const MemberDatas: MemberData[] = [];