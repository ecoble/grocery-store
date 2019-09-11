import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { CartItem } from '../cart-item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';
import { StorageService } from '../storage.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item: Item;
  cartItem = new CartItem();
  amount: number; 
  itemid: string;
  isInCart: boolean;
  invalid: boolean;

  constructor(private route: ActivatedRoute, 
              private itemService: ItemService,
              private location: Location,
              private storageService: StorageService,
              private snackbar: MatSnackBar) { 

                this.route.params.subscribe(params => {
                  this.itemid = params['id'];
                  this.setItem();
                  this.isInCart = params['cart'] === "true";
                  if(this.isInCart)
                  {
                    this.amount = this.storageService.getItemAmount(this.itemid);
                  }
                  else {
                    this.amount = 1;
                  }
                });
              }

  ngOnInit(): void {
    
  }

  setItem(): void {
    this.itemService.getItem(this.itemid)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(): void { 
    this.setCartItem();
    this.storageService.saveNewItem(this.cartItem);
    this.snackbar.open("Added to cart.", null, {duration: 3000});
  }

  noItems() {
    return this.amount == 0;
  }

  invalidAmount() {
    return this.invalid;
  }

  removeFromCart(): void {  
    this.setCartItem(); 
    this.storageService.removeItem(this.cartItem);
    this.goBack();
  }

  private setCartItem(): void {
    this.cartItem.amount = this.amount;
    this.cartItem.item = this.item;
  }

  onKey(event: any) {
    if(this.amount <= 0)
    {
      if(this.amount < 0)
      {
        this.snackbar.open("Invalid amount.", null, {duration: 3000});
      }

      this.invalid = true;
      return;
    }

    this.invalid = false;
    if(this.isInCart) {
      this.storageService.updateItemAmount(this.item, this.amount);
    }
  }

}
