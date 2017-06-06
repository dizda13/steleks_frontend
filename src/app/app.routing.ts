import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {Home} from "./pages/home.component";
/**
 * Created by admin on 06/06/2017.
 */

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: Home }
];

export const Routing = RouterModule.forRoot(appRoutes);
