import { Component, OnInit } from '@angular/core';

import { Ng2BootstrapConfigService } from '../ng2-bootstrap-config';
import { DatePickerInnerComponent } from './datepicker-inner.component';

@Component({
  selector: 'monthpicker',
  template: `
<table *ngIf="datePicker.datepickerMode==='month'" role="grid">
  <thead>
    <tr>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-left"
                (click)="datePicker.move(-1)" tabindex="-1">
          <i class="glyphicon glyphicon-chevron-left"></i>
        </button></th>
      <th>
        <button [id]="uniqueId + '-title'"
                type="button" class="btn btn-default btn-sm"
                (click)="datePicker.toggleMode()"
                [disabled]="datePicker.datepickerMode === maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{title}}</strong>
        </button>
      </th>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-right"
                (click)="datePicker.move(1)" tabindex="-1">
          <i class="glyphicon glyphicon-chevron-right"></i>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let rowz of rows">
      <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" id="{{dtz.uid}}" [ngClass]="dtz.customClass">
        <template [ngIf]="config.theme == config.themes.BS4">
          <button type="button" style="min-width:100%;" class="btn btn-default"
                  [ngClass]="{'btn-info': dtz.selected, 'btn-link': !dtz.selected && !datePicker.isActive(dtz), active: !dtz.selected && datePicker.isActive(dtz), disabled: dtz.disabled}"
                  [disabled]="dtz.disabled"
                  (click)="datePicker.select(dtz.date)" tabindex="-1"><span [ngClass]="{'text-success': dtz.current}">{{dtz.label}}</span></button>
        </template>
        <template [ngIf]="config.theme == config.themes.BS3">
          <button type="button" style="min-width:100%;" class="btn btn-default"
                  [ngClass]="{'btn-info': dtz.selected, active: datePicker.isActive(dtz), disabled: dtz.disabled}"
                  [disabled]="dtz.disabled"
                  (click)="datePicker.select(dtz.date)" tabindex="-1"><span [ngClass]="{'text-info': dtz.current}">{{dtz.label}}</span></button>
        </template>
      </td>
    </tr>
  </tbody>
</table>
  `
})
export class MonthPickerComponent implements OnInit {
  public title:string;
  public rows:Array<any> = [];
  public datePicker:DatePickerInnerComponent;

  public constructor(datePicker:DatePickerInnerComponent, public config:Ng2BootstrapConfigService) {
    this.datePicker = datePicker;
  }

  public ngOnInit():void {
    let self = this;

    this.datePicker.stepMonth = {years: 1};

    this.datePicker.setRefreshViewHandler(function ():void {
      let months:Array<any> = new Array(12);
      let year:number = this.activeDate.getFullYear();
      let date:Date;

      for (let i = 0; i < 12; i++) {
        date = new Date(year, i, 1);
        date = this.fixTimeZone(date);
        months[i] = this.createDateObject(date, this.formatMonth);
        months[i].uid = this.uniqueId + '-' + i;
      }

      self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
      self.rows = this.split(months, 3);
    }, 'month');

    this.datePicker.setCompareHandler(function (date1:Date, date2:Date):number {
      let d1 = new Date(date1.getFullYear(), date1.getMonth());
      let d2 = new Date(date2.getFullYear(), date2.getMonth());
      return d1.getTime() - d2.getTime();
    }, 'month');

    this.datePicker.refreshView();
  }

  // todo: key events implementation
}
