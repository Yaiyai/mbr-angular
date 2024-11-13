import { Component, Input } from '@angular/core';
import { AppService } from '../../communication/services/app/app.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() classBtn: 'main' | 'outline' | 'go' | 'link' | 'gray' | 'white' | 'nolink' | 'nav' = 'main';
  @Input() isLink: boolean = false;
  @Input() isNegative: boolean = false;
  @Input() noTranslate: boolean = false;
  @Input() link: string = '';
  @Input() icon: string = '';

  constructor(public appService: AppService) { }

  ngOnInit() {

  }
}
