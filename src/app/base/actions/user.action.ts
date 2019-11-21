import { User } from '../models/user.model';

export class AddUser {
    static readonly type = '[USER] Add User';
    static readonly desc = 'add user';
    constructor (public payload: User.UserData) {}
}

export class RemoveUser {
    static readonly type = '[USER] Remove User';
    static readonly desc = 'remove user';
    constructor (public payload: number) {}
}