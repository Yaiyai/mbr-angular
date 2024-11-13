import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
    imports: [
        CommonModule,
        PipesModule,
    ],
    declarations: [ButtonComponent],
    exports: [ButtonComponent]
})
export class ButtonModule { }