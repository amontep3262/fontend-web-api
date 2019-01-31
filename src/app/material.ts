import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
} from '@angular/material'
@NgModule({
    imports:[
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatGridListModule
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatGridListModule
    ]
})
export class materialModule{}