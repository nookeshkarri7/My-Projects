class MyClass{
    constructor(p1,p2){
        this.p1=p1
        this.p2=p2
    }
    diplay(){
        return this.p1+" "+this.p2
    }
}

class newsub extends MyClass{
    constructor(p1,p2){
        super(p1)
        this.p2=p2
    }
}
let obj=new newsub("1","2")
console.log(obj.diplay())