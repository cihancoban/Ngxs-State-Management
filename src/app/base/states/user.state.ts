import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddUser, RemoveUser } from '../actions/user.action';
import { User } from '../models/user.model'

export class UserStateModel {
    user: User.UserData[];
}

@State<UserStateModel>({
    name: 'userStateName',
    defaults: {
        user: []
    }
})

export class UserState {

    @Selector()
    static getUserData(state: UserStateModel) {
        return state.user;
    }

    @Action(AddUser)
    add({patchState, getState}: StateContext<UserStateModel>, { payload }: AddUser){
        const userList = getState();
        patchState({
            user: [...userList.user, payload]
        })
    }

    @Action(RemoveUser)
    remove({getState, patchState }: StateContext<UserStateModel>, { payload }:RemoveUser) {
        const userList = getState();
        patchState({
            user: [...userList.user.slice(0, payload), ...userList.user.slice(payload + 1)]
        })
    }
}