import {Component} from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";
import {Item} from "../../../models/item";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  items : Item[] = this.service.items
  form: FormGroup = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    price: new FormControl(0, Validators.min(0)),
    promo: new FormControl(false)
  })
  totalPrice : number = this.service.totalCartPrice

  constructor(
    private readonly service: ShoppingListService
  ) {}

  private update() {
    this.items = this.service.items
    this.totalPrice = this.service.totalCartPrice
  }

  addItem() {
    this.service.addItem(this.form.value.name,this.form.value.price,this.form.value.promo)
    this.form.reset({
      name: '',
      price: 0,
      promo: false
    })
    this.update()
  }

  addOne(item: Item) {
    item.addOne()
    this.update()
  }

  removeOne(item: Item) {
    this.service.removeOne(item)
    this.update()
  }

  deleteItem(item: Item) {
    this.service.deleteItem(item)
    this.update()
  }
}
