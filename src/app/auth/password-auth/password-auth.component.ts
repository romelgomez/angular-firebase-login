import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


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

  ngOnInit() {

  }

  onSubmit(vals) {
    console.log('loginForm.value: ' + this.loginForm.get('email').value );
  }

}
