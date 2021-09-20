import { Component } from '@angular/core';
import { DrugService } from '../drug.service';
import { ItemInterface } from '../element/element.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private itemsLength = 10;
  output = '';
  pageNumber = 0;
  drugs: ItemInterface[] = [];
  afterSearchDrugs: ItemInterface[] = [];

  constructor(service: DrugService) {
    this.drugs = service.getDrugs();
  }

  getSearchOutput(output: string): ItemInterface[] {
    this.output = output;
    this.afterSearchDrugs = this.drugs
      .filter((s) =>
        (s.Name as string).toLowerCase().includes(output.toLowerCase())
      )
      .slice(0, this.itemsLength);
    return this.afterSearchDrugs;
  }

  showMore() {
    this.pageNumber++;
    this.afterSearchDrugs = [
      ...this.afterSearchDrugs,
      ...this.drugs
        .filter((s) =>
          (s.Name as string).toLowerCase().includes(this.output.toLowerCase())
        )
        .slice(
          this.itemsLength * this.pageNumber,
          this.itemsLength * (this.pageNumber + 1)
        ),
    ];
  }
}
