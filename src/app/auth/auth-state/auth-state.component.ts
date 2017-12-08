import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth-state',
  templateUrl: './auth-state.component.html',
  styleUrls: ['./auth-state.component.css']
})
export class AuthStateComponent {

  @Input() user: Observable<firebase.User>;

}
