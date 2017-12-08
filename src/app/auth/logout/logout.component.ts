import { Component, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  @Input() user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {}

  logout() {
     this.afAuth.auth.signOut();
  }

}
