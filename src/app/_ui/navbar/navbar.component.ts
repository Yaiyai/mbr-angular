import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CompanyService } from '../../communication/services/company/company.service';
import { AppService } from '../../communication/services/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private subscription: Subscription = new Subscription();
  public company: any;

  constructor(
    private router: Router,
    public companyService: CompanyService,
    public translate: TranslateService,
    public appService: AppService) {
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.navigate('/');
  }

  switchLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
  }

  navigate(url: string, anchor: string = '') {
    if (anchor) {
      this.router.navigate([url], { fragment: anchor });

    } else {
      this.router.navigate([url]);
    }
  }

}
