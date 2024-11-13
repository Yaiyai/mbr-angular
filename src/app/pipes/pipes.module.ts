import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { MyTranslate } from './translate.pipe';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SafePipe, MyTranslate],
    exports: [SafePipe, MyTranslate]
})
export class PipesModule { }