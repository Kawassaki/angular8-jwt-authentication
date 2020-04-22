import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { AuthGuard } from "../_helplers/auth.guard";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "@app/components/register/register.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: "**", redirectTo: "/", canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
