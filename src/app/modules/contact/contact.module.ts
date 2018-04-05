import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact.component';


const routesConfig: Routes = [
    { path: 'contact', component: ContactComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations: [ContactComponent]
})

export class ContactModule {}