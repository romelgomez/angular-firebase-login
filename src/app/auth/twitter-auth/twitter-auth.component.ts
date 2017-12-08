import { Component, OnInit , Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-twitter-auth',
  templateUrl: './twitter-auth.component.html',
  styleUrls: ['./twitter-auth.component.css']
})
export class TwitterAuthComponent  implements OnInit {

  @Input() user: Observable<firebase.User>;

  private provider: firebase.auth.TwitterAuthProvider;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit () {
    this.provider = new firebase.auth.TwitterAuthProvider();
    this.provider.setCustomParameters({
      'lang': 'es'
    });
  }

  signInWithPopup() {
    this.afAuth.auth.signInWithPopup(this.provider);
  }

  signInWithRedirect() {
    this.afAuth.auth.signInWithRedirect(this.provider);
  }

}
