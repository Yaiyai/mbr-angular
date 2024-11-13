import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextImageComponent } from './text-image.component';
import { SharedModule } from '../../components/shared.module';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [TextImageComponent],
    exports: [TextImageComponent]
})
export class TextImageModule { }