import { makeAutoObservable } from "mobx";


export default class Store {
    count=1;
    constructor(){
    makeAutoObservable(this)
    }

    get countText(){
        return this.count > 5 ? "sayı 5 den büyük" : "sayı 5 den küçük"
    }

    inc(){
        this.count+=1;
    }
    dec(){
        this.count-=1;
    }
    incWithParams(number){
        this.count+=number;
    }
}