import { Component, OnInit } from '@angular/core';
import groupBy from 'lodash-es/groupBy';

@Component({
  selector: 'app-les3',
  templateUrl: './les3.component.html',
  styleUrls: ['./les3.component.scss']
})
export class Les3Component implements OnInit {
  transactionData: {
    transaction: {
      eventId: string
      service: {
        $key: string
      }
    }
  }[]
  groupedTransactions: {
    transaction: {
      eventId: string;
      service: {
        $key: string;
      };
    };
  }[][]

  constructor() {
    this.transactionData = [
      {
        transaction: {
          eventId: 'eventId1',
          service: {
            $key: 'key1'
          }
        }
      },
      {
        transaction: {
          eventId: 'eventId1',
          service: {
            $key: 'key2'
          }
        },
      },
      {
        transaction: {
          eventId: 'eventId2',
          service: {
            $key: 'key3'
          }
        },
      },
    ]
    this.groupedTransactions = []
  }

  ngOnInit(): void {
    this.groupedTransactions = Object.values(
      groupBy(this.transactionData, "transaction.eventId")
    );

    console.log(this.groupedTransactions)
  }

}
