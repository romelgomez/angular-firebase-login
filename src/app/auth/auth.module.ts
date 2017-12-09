// ANGULAR
import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';


// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// APP
import { environment } from '../../environments/environment';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthStateComponent } from './auth-state/auth-state.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { FacebookAuthComponent } from './facebook-auth/facebook-auth.component';
import { TwitterAuthComponent } from './twitter-auth/twitter-auth.component';
import { PasswordAuthComponent } from './password-auth/password-auth.component';
import { PasswordAuthSignInComponent } from './password-auth-sign-in/password-auth-sign-in.component';



// MATERIAL
/* import { MatButtonModule, MatIconModule, MatCardModule, MatTabsModule, MatListModule, MatInputModule } from '@angular/material'; */
import { FlexLayoutModule } from '@angular/flex-layout';

// ALL MATERIAL MODULES
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  // MatCoreModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    // MatCoreModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MatAllModules {}

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    // imports firebase/auth, only needed for auth features
    AngularFireAuthModule,
    // MatButtonModule,
    // MatCardModule,
    // MatTabsModule,
    // MatListModule,
    // MatIconModule,
    // MatInputModule,
    // MatAllModules,
    MatAllModules,
    FlexLayoutModule,
    ReactiveFormsModule,
    // FormsModule
  ],
  exports: [AuthComponent],
  declarations: [
    AuthComponent,
    GoogleAuthComponent,
    LogoutComponent,
    AuthStateComponent,
    FacebookAuthComponent,
    TwitterAuthComponent,
    PasswordAuthComponent,
    PasswordAuthSignInComponent
  ]
})
export class AuthModule {}
