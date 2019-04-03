import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Contract} from "./contract";
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>("http://localhost:8080/contracts")
      .pipe(catchError(this.handleError<Contract[]>('getAllContracts', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('inform user about: ' + message);
  }
}
