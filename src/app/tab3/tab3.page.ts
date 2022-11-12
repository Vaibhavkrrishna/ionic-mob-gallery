import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class Tab3Page implements OnInit {
  tickets: any[];

  constructor() { }

  ngOnInit() {
    fetch('./assets/database.json').then(res => res.json())
      .then(json => {
        this.tickets = json;
      });
  }

}
