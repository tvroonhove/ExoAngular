import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";
import {Item} from "../../../models/item";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  items : Item[] = []
  name = ''
  price = 0
  promo = false
  totalPrice : number = 0

  constructor(
    private readonly service: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.items = this.service.items
    this.updatePrice()
  }

  private updatePrice() {
    this.totalPrice = this.service.totalCartPrice
  }

  addItem() {
    this.service.addItem(this.name,this.price,this.promo)
    this.updatePrice()
    this.name = ''
    this.price = 0
    this.promo = false
  }

  addOne(item: Item) {
    item.addOne()
    this.updatePrice()
  }

  removeOne(item: Item) {
    this.service.removeOne(item)
    this.updatePrice()
  }

  deleteItem(item: Item) {
    this.service.deleteItem(item)
    this.updatePrice()
  }
}
