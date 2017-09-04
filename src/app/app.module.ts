import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { PublicEventComponent } from './components/public-event/public-event.component';
import { HomeComponent } from './components/home/home.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { CommentComponent } from './components/comment/comment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ActiveEventsComponent } from './components/active-events/active-events.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { MyActivityComponent } from './components/my-activity/my-activity.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PreviousEventsComponent } from './components/previous-events/previous-events.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CommentService} from "./services/comment.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchFormComponent,
    PublicEventComponent,
    HomeComponent,
    AddEventComponent,
    CommentComponent,
    ProfileComponent,
    ActiveEventsComponent,
    EventDetailComponent,
    MyEventsComponent,
    MyActivityComponent,
    LoginComponent,
    LogoutComponent,
    PreviousEventsComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule
  ],
  providers: [
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
