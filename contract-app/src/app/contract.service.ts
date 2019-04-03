import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Contract} from "./contract";
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";
import {CreateContractRequest} from "./CreateContractRequest";

const URL = "http://localhost:8080/contracts";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  @Output() contractAdded: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(URL)
      .pipe(catchError(this.handleError<Contract[]>('getAllContracts', [])));
  }

  requestContract(createContractRequest: CreateContractRequest): Observable<any> {
    return this.http.post<Contract>(URL, createContractRequest, HTTP_OPTIONS)
      .pipe(tap(_ => this.contractAdded.emit("toBeId")));
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
