import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'translating',
    pure: false,
})
export class MyTranslate extends TranslatePipe implements PipeTransform {

    override transform(value: any, args?: any[]): any {
        return super.transform(value, args);
    }
} 