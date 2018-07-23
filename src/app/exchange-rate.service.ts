import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RateData } from './exchange-rate';

@Injectable({
  providedIn: 'root'
})
// @Injectable()

export class ExchangeRateService {

  constructor(public http: HttpClient) { }

  getExchange(date: string, base: string): Observable<RateData> {
    return this.http.get<RateData>('https://exchangeratesapi.io/api/' + date,
    {
      params: new HttpParams()
        .set('base', base)
    })
    .pipe(
      catchError(this.handleError<any>(`getExchange date=${date}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return observableOf(result as T);
    };
  }

}
