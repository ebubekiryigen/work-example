import { makeAutoObservable } from "mobx";



export const storeWithObject = makeAutoObservable({
    users:[],
    get count(){
        return this.users.length
    },

    addUser(data){
        storeWithObject.users.push(data)
    },
    getUser(){
        return storeWithObject.users 
    }
})