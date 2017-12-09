import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-password-auth-sign-in',
  templateUrl: './password-auth-sign-in.component.html',
  styleUrls: ['./password-auth-sign-in.component.css']
})
export class PasswordAuthSignInComponent implements OnInit {

  signInForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords : new FormGroup({
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'repeatPassword': new FormControl('', [
        Validators.required
      ])
    }, [this.areEqual])
  });

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {

  }

  onSubmit() {
    // console.log('signInForm.value: ' + this.signInForm.get('email').value );
    // console.log('signInForm.value: ' + this.signInForm.get('passwords.password').value );

    this.afAuth.auth.signInWithEmailAndPassword( this.signInForm.get('email').value, this.signInForm.get('passwords.password').value )
      .catch(error =>  {
        alert(error.message);
      })  ;

  }

  // https://stackoverflow.com/a/45837475
  areEqual(c: AbstractControl): ValidationErrors | null {
    const keys: string[] = Object.keys(c.value);
    for (const i in keys) {
      if (i !== '0' && c.value[ keys[ +i - 1 ] ] !== c.value[ keys[ i ] ]) {
        return { areEqual: true };
      }
    }
  }

}
