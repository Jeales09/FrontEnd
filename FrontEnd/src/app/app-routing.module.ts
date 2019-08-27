import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
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


const routes: Routes = [
  {path: 'homepage', component: HomePageComponent},
  {path: 'exerciseplan', component: ExerciseplanComponent},
  {path: 'challenges', component: ChallengesComponent},
  {path: 'subscriptions', component: SubscriptionsComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'confirmSubscription', component: ConfirmSubscriptionComponent},
  {path: 'paymentDetails', component: PaymentDetailsComponent},
  {path: 'successsignup', component: SuccessSignupComponent},
  {path: 'confirmsub2', component: Confirmsub2Component},
  {path: 'confirmsub3', component: Confirmsub3Component},
  {path: 'confirmchallenge', component: ConfirmCsignupComponent},
  {path: 'successCsignup', component: SuccessCsignupComponent},
  {path: 'successchallenge', component: SuccesschallengeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents = [HomePageComponent, ExerciseplanComponent, ChallengesComponent, SubscriptionsComponent, UserprofileComponent]