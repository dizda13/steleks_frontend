import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NewsSliderComponent } from "./components/news-slider/news-slider.component";
import {HttpModule} from "@angular/http";
import { MaterializeModule } from "angular2-materialize";
import {SliderContectComponent} from "./components/slider-contect/slider-contect.component";
import {PopularNewsComponent} from "./components/popular-news/popular-news.component";
import {EventsComponent} from "./components/events/events.component";
import {FooterComponent} from "./components/footer/footer.component";
import {Routing} from "./app.routing";
import {LoginComponent} from "./components/login/login.component";
import {Home} from "./pages/home.component";
import {LoginService} from "./services/login.service";
import {EventService} from "./services/event.service";
import {ImageService} from "./services/image.service";
import {EventListComponent} from "./components/event-list/event-list.component";
import {ReadEventComopnent} from "./components/read-event/read-event.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsSliderComponent,
    SliderContectComponent,
    PopularNewsComponent,
    EventsComponent,
    FooterComponent,
    LoginComponent,
    Home,
    EventListComponent,
    ReadEventComopnent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule,
    Routing,
  ],
  providers: [
    LoginService,
    EventService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
