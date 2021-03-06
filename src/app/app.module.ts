import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './modules/routing/routing.module'


import { AppComponent } from './app.component';
import { WordComponent } from './components/word/word.component';
import { PersonComponent } from './components/person/person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParentsComponent } from './components/parents/parents.component';
import { ChildsComponent } from './components/childs/childs.component';
import { CardComponent } from './components/card/card.component';
import { IpComponent } from './components/ip/ip.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PathLocationComponent } from './components/path-location/path-location.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    ParentsComponent,
    ChildsComponent,
    CardComponent,
    IpComponent,
    WeatherComponent,
    SigninComponent,
    SignupComponent,
    PathLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
