import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, http: HttpClient, iconReg: MatIconRegistry, sanitizer: DomSanitizer) {

    this.user = afAuth.authState;

    iconReg.addSvgIcon('google', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/google.svg'))
           .addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/facebook.svg'))
           .addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg'));
  }

}
