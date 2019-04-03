import { Component, OnInit } from '@angular/core';
import {Contract} from "../contract";
import {ContractService} from "../contract.service";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  contracts: Contract[];
  columnsToDisplay: string[] = ['type', 'customerName'];

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.getContracts();
  }

  getContracts(): void {
    this.contractService.getAllContracts().subscribe(contracts => this.contracts = contracts);
  }

}
