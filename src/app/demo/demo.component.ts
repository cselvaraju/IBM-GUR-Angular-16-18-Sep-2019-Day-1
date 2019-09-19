import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  message;
  vegetables;
  listFlag: boolean;
  newName: string;
  newPrice: number;

  constructor() {
  }

  ngOnInit() {
    this.message = 'Hello';
    this.vegetables = [
      {name: 'Carrot', price: 80},
      {name: 'Tomato', price: 50},
      {name: 'Bottle Gourd', price: 30}
    ];
    this.listFlag = true;
    this.newName = '';
    this.newPrice = null;
  }

  btnClicked(event) {
    alert('OUCH! That Hurt!!\nPlease be gentle.....');
    console.log(event);
  }

  toggleList() {
    this.listFlag = !this.listFlag;
  }

  deleteVeg(index) {
    this.vegetables.splice(index, 1);
  }

  addVeg() {
    this.vegetables.push({
      name: this.newName,
      price: this.newPrice
    });
  }
}
