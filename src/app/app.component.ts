import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { User } from './base/models/user.model';
import { AddUser, RemoveUser } from './base/actions/user.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  userData$: Observable<User.UserData>;

  constructor(private store: Store) {

    this.userData$ = this.store.select(state => state.userStateName.user);
    
  }

  addUserEvent(name: string, url: string) {
    const reqFilter = { name: name, surname: url };
    this.store.dispatch(new AddUser( reqFilter ));    
  }

  deleteUserEvent(index) {
    this.store.dispatch(new RemoveUser(index));
  }

}
