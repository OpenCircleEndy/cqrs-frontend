import {Component, OnInit} from '@angular/core';
import {ContractService} from "../contract.service";
import {CreateContractRequest} from "./CreateContractRequest";

@Component({
  selector: 'app-request-contract',
  templateUrl: './request-contract.component.html',
  styleUrls: ['./request-contract.component.css']
})
export class RequestContractComponent implements OnInit {

  private createContractRequest: CreateContractRequest;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.clearForm();
  }

  requestContract(): void {
    this.contractService.requestContract(this.createContractRequest)
      .subscribe((value) => this.clearForm(), (error) => console.log(error));
  }

  private clearForm(): void {
    this.createContractRequest = {type: null, leadNumber: null};
  }
}
