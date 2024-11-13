import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
import { AppService } from 'src/app/communication/services/app/app.service';
import { CompanyService } from 'src/app/communication/services/company/company.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public features: string[] = [];
  public home: any = null;

  public get floatingImage() {
    return this.home?.gallery[0];
  }

  public get bkg() {
    return this.home?.uniqueImage;
  }

  public get title() {
    return this.home?.title;
  }

  public get logo() {
    return this.companyService.companyLogoBN;
  }

  constructor(
    public companyService: CompanyService,
    public apiSectionsService: ApiSectionsService,
    private translate: TranslateService,
    public appService: AppService,
  ) {
    this.translate.onLangChange.subscribe(res => {
      this.getData();
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '6533fce44f5e07001aa5bcaf' : '65492b1ed90d872145f14feb').subscribe({
      next: section => {
        this.home = section.section;
        this.features = this.home.text.split('((()))');
      }
    });
  }

}
