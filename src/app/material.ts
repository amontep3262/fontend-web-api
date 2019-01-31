import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
} from '@angular/material'
@NgModule({
    imports:[
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule
    ]
})
export class materialModule{}