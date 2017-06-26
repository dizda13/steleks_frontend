import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {Home} from "./pages/home.component";
import {EventListComponent} from "./components/event-list/event-list.component";
import {ReadEventComopnent} from "./components/read-event/read-event.component";
import { AddEventComponent } from './components/add-event/add-event.component';

/**
 * Created by admin on 06/06/2017.
 */

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventListComponent },
  { path: 'news', component: EventListComponent },
  { path: 'events/:id', component: ReadEventComopnent},
  { path: 'addEvent', component: AddEventComponent},
  { path: '**', component: Home }
];

export const Routing = RouterModule.forRoot(appRoutes);
