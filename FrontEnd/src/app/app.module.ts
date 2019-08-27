import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExerciseplanComponent } from './exerciseplan/exerciseplan.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ConfirmSubscriptionComponent } from './confirm-subscription/confirm-subscription.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { SuccessSignupComponent } from './success-signup/success-signup.component';
import { Confirmsub2Component } from './confirmsub2/confirmsub2.component';
import { Confirmsub3Component } from './confirmsub3/confirmsub3.component';
import { ConfirmCsignupComponent } from './confirm-csignup/confirm-csignup.component';
import { SuccessCsignupComponent } from './success-csignup/success-csignup.component';
import { SuccesschallengeComponent } from './successchallenge/successchallenge.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    ExerciseplanComponent,
    ChallengesComponent,
    SubscriptionsComponent,
    UserprofileComponent,
    ConfirmSubscriptionComponent,
    PaymentDetailsComponent,
    SuccessSignupComponent,
    Confirmsub2Component,
    Confirmsub3Component,
    ConfirmCsignupComponent,
    SuccessCsignupComponent,
    SuccesschallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
