import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { 
    ModalModule,
    
 } from 'ngx-bootstrap';

@NgModule({
    imports:[
        ModalModule.forRoot(),
        TabsModule.forRoot(),
    ],
    exports:[]
})
export class ngxBoostarpModule{}