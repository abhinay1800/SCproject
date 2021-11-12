import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { EdituserComponent } from './edituser/edituser.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "", component : LoginComponent},
  {path: "register", component : RegisterComponent},
  {path: "track-order", component : TrackOrderComponent},
  {path: "users", component : UsersComponent, canActivate: [ AuthGuard]},
  {path: "edituser/:userid", component : EdituserComponent, canActivate: [AuthGuard]},
  {path: "adduser", component : AdduserComponent, canActivate: [AuthGuard]},
  {path: "loggedin", component : LoggedinComponent}, 
  {path: "**",component : NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
