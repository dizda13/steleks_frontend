import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {Home} from './pages/home.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {ReadEventComopnent} from './components/read-event/read-event.component';
import {AddEventComponent} from './components/add-event/add-event.component';
import {AuthGuard} from './services/AuthGuard';

/**
 * Created by admin on 06/06/2017.
 */

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  {path: 'events', component: EventListComponent, canActivate: [AuthGuard]},
  {path: 'news', component: EventListComponent, canActivate: [AuthGuard]},
  {path: 'events/:id', component: ReadEventComopnent, canActivate: [AuthGuard]},
  {path: 'addEvent', component: AddEventComponent, canActivate: [AuthGuard]},
  {path: '**', component: Home, canActivate: [AuthGuard]},
];

export const Routing = RouterModule.forRoot(appRoutes);
