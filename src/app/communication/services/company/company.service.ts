import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
type MessageCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private handler = new Subject<any>();
  public _company: any;

  public get companyLogo() {
    return this.company?.mainLogo;
  }

  public get companyLogoBN() {
    return this.company?.secondaryLogo;
  }

  public get company() {
    return this._company;
  }

  public get name() {
    return this._company?.name;
  }

  constructor() { }

  setCompany(company: any) {
    this._company = company;
  }

  broadcast(type: string, payload: any = null) {
    this.handler.next({ type, payload });
  }

  subscribe(type: string, callback: MessageCallback): Subscription {
    return this.handler.pipe(
      filter(message => message.type === type),
      map(message => message.payload))
      .subscribe(callback);
  }
}
