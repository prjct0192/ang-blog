import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger';

export interface Alert {
  type: AlertType;
  text: string;
}

@Injectable()
export class AlertService {
  public alert$ = new Subject<Alert>();
  alert(text: string): any {
    this.alert$.next( {type: 'success', text});
  }
  warning(text: string): any {
    this.alert$.next( {type: 'warning', text});
  }
  danger(text: string): any {
    this.alert$.next( {type: 'danger', text});
  }
}
