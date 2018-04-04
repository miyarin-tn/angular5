import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { IpService } from './services/ip.service';


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
    IpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
