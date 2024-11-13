import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/components/shared.module';
import { ListItemModule } from 'src/app/_ui/list-item/list-item.module';
import { ContactModule } from 'src/app/components/contact/contact.module';
import { LogosModule } from 'src/app/components/logos/logos.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ListItemModule,
        ContactModule,
        LogosModule,
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
        HomeRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }