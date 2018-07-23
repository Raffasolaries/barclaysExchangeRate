import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource, MatDatepickerInputEvent,
  MatDialog, MatDialogRef, MatSelect, MatOption, MAT_DIALOG_DATA, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { merge } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, startWith, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as moment from 'moment';

import { ExchangeRateService } from './exchange-rate.service';
import { RateData } from './exchange-rate';
import { FormBuilder, FormGroup, FormControl, Validators } from '../../node_modules/@angular/forms';
import { keyframes } from '../../node_modules/@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {

  title = 'Barclays Exchange Rate';
  data: RateData;
  displayedColumns = ['currency', 'buy', 'sell'];
  dataSource = new MatTableDataSource();
  dateStart = new BehaviorSubject<string>(moment().format('YYYY-MM-DD'));
  base = new BehaviorSubject<string>('USD');
  bases = [];
  tableData = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private rateService: ExchangeRateService,
    private fb: FormBuilder,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isLoadingResults = true;
    this.setExchange();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  setExchange() {
    this.rateService.getExchange(this.dateStart.getValue(), this.base.getValue())
      .subscribe(data => {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.bases = Object.keys(data['rates']);
          Object.keys(data['rates']).forEach( key => {
            this.tableData.push({
              currency: key,
              buy: (data['rates'][key] + (data['rates'][key] * 5) / 100).toFixed(4),
              sell: (data['rates'][key] - (data['rates'][key] * 5) / 100).toFixed(4)
            });
          });
          this.dataSource.data = this.tableData;
          this.tableData = [];
          this.changeRef.detectChanges();
          /* console.log('form values', this.dateStart.getValue(), this.base.getValue());
          console.log('table data', data, this.dataSource.data); */
      });
  }

  startSearch(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateStart.next(moment(event.value).format('YYYY-MM-DD'));
  }

}
