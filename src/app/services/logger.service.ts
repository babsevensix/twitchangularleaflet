import { Inject, Injectable, inject } from '@angular/core';

export abstract class MinimalLogger {
    abstract log(msg: string): void;
    //abstract setUserName(username:string): void;
}

@Injectable({providedIn: 'root'})
export class LoggerService extends MinimalLogger {
    constructor() {
        super();
     }
    

    log(msg: string): void{
        console.log(`[LOGGER SERVICE] ${msg}`);
    }
}



@Injectable({providedIn: 'root'})
export class BetterLoggerService extends MinimalLogger{
    constructor(private userService: UserService, 
        @Inject('USE_FAKE')
        private useFake: boolean) {
        super();
    }
    log(msg: string): void{
        console.log(`[${this.useFake} - BETTER LOGGER SERVICE - ${this.userService.userName}] ${msg}`);
    }
}



@Injectable({providedIn: 'root'})
export class UserService {
    constructor() { }
    
    get userName(){
        return 'Alberto'
    }
}