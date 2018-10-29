import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports:[
        MatDividerModule,
        MatGridListModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports:[
        MatDividerModule,
        MatGridListModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export default class MaterialModule {}