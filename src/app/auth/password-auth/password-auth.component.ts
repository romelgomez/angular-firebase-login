import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-password-auth',
  templateUrl: './password-auth.component.html',
  styleUrls: ['./password-auth.component.css']
})
export class PasswordAuthComponent implements OnInit {

  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {

  }

  onSubmit() {
    console.log('loginForm.value: ' + this.loginForm.get('email').value );
    console.log('loginForm.value: ' + this.loginForm.get('password').value );

    this.afAuth.auth.signInWithEmailAndPassword( this.loginForm.get('email').value, this.loginForm.get('password').value )
      .catch(error =>  {
        alert(error.message);
      })  ;

  }

}
