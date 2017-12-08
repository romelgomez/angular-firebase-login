import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-facebook-auth',
  templateUrl: './facebook-auth.component.html',
  styleUrls: ['./facebook-auth.component.css']
})
export class FacebookAuthComponent implements OnInit {

  @Input() user: Observable<firebase.User>;

  private provider: firebase.auth.FacebookAuthProvider;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit () {
    this.provider = new firebase.auth.FacebookAuthProvider();
    this.provider.addScope('email');
  }

  signInWithPopup() {
    this.afAuth.auth.signInWithPopup(this.provider);
  }

  signInWithRedirect() {
    this.afAuth.auth.signInWithRedirect(this.provider);
  }

}
