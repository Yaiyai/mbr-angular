import { Component, Input } from '@angular/core';
import { AppService } from '../../communication/services/app/app.service';

@Component({
  selector: 'app-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent {
  @Input() isCustom: boolean = false;
  @Input() leftImage: boolean = false;
  @Input() justified: boolean = false;
  @Input() mainTitle: any;
  @Input() image: any;
  @Input() text: any;

  constructor(public appService: AppService) { }


}
