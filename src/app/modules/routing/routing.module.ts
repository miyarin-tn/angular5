import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from '../contact/contact.module';


import { AboutComponent } from '../../components/about/about.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';


const routesConfig: Routes = [
  { path: 'about/:id/:name/:phone', component: AboutComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ContactModule,
    RouterModule.forRoot(routesConfig)
  ],
  declarations: [
    AboutComponent,
    NotFoundComponent
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
