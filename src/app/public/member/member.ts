//Meber detail
export class Member {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {  }

  getMember(){
      return {id:this.id,
                name:this.name,
                email:this.email};
  }
  setMember(item:object){
    for(var k in item){
        this[k] = item[k];
    }
  }
}

export class MemberData {
    id: number;
    name: string;
    email: string;
}
