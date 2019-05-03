import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Lead} from "../leads/leads.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RelationService} from "../../relations/relation.service";
import {Relation} from "../../relations/relation";


const URL = "http://localhost:8080/leads";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent implements OnInit {

  private createLeadRequest: Lead;
  private relations: Relation[];

  constructor(private http: HttpClient, private relationService: RelationService) {
  }

  ngOnInit(): void {
    this.clearForm();
    this.getAllRelations();
  }

  submit(): void {
    this.requestLead(this.createLeadRequest)
      .subscribe((value) => this.clearForm(), (error) => console.log(error));
  }

  requestLead(createLeadRequest: Lead): Observable<any> {
    return this.http.post<Lead>(URL, createLeadRequest, HTTP_OPTIONS);
  }


  private getAllRelations(): void {
    this.relationService.getAllRelations().subscribe(value => this.relations = value);
  }

  private clearForm(): void {
    this.createLeadRequest = {id: null, number: null, relationId: null, quantity: null};
  }
}
