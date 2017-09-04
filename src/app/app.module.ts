import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {GooglePlaceModule} from "angular2-google-place"
import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchFormComponent } from './Components/search-form/search-form.component';
import { PublicEventComponent } from './Components/public-event/public-event.component';
import { HomeComponent } from './Components/home/home.component';
import { AddEventComponent } from './Components/add-event/add-event.component';
import { CommentComponent } from './Components/comment/comment.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ActiveEventsComponent } from './Components/active-events/active-events.component';
import { EventDetailComponent } from './Components/event-detail/event-detail.component';
import { MyEventsComponent } from './Components/my-events/my-events.component';
import { MyActivityComponent } from './Components/my-activity/my-activity.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { PreviousEventsComponent } from './Components/previous-events/previous-events.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

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
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdDatepickerModule,
    FormsModule,
    MdNativeDateModule,
    GooglePlaceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
