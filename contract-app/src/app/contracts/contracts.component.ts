import {Component, OnInit} from '@angular/core';
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
    this.refresh();
    this.subscribeToEvents();
  }

  refresh(): void {
    this.contractService.getAllContracts().subscribe(contracts => this.contracts = contracts);
  }

  private subscribeToEvents() {
    this.contractService.contractAdded.subscribe(value => this.refresh());
  }
}
