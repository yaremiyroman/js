import type { IUser } from './IUser';

class User implements IUser {
    public name: string;
    public id: number;
    public email: string;


    private someVar: string = 'I AM SOME VAR';

    protected protectedVar: string = 'I AM PROTECTED VAR';

    static count: number = 0;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public getInfo(): string {
        return 'USER ' + this.someVar;
    }

}

export class NewUser extends User {
    constructor(id: number, name: string, email: string) {
        super(id, name, email);
    }

    public getUser(): string {
        return 'USER ' + this.protectedVar;
    }
}
