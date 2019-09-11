import { Injectable } from '@angular/core';
import { Item } from './item';
import { CartItem } from './cart-item';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor() {}

    private saveItemsToStorage(items: CartItem[]) {
        localStorage.setItem('savedItems', JSON.stringify(items));
    }

    getItemsFromStorage(): CartItem[] {
        return JSON.parse(localStorage.getItem('savedItems')) || [];
    }

    saveNewItem(item: CartItem): void {
        if(this.getItemsFromStorage().find(cartitem => cartitem.item.id === item.item.id) == undefined)
        {
            const cartItems = this.getItemsFromStorage();
            cartItems.push(item);
            this.saveItemsToStorage(cartItems); 
        }
        else
        {
            const amount = this.getItemAmount(item.item.id) + parseInt(item.amount.toString());
            this.updateItemAmount(item.item, amount);
        }
    }

    clearStorage(): void {
        localStorage.clear();
    }

    removeItem(item: CartItem): void {
        this.saveItemsToStorage(this.getItemsFromStorage().filter(i => i.item.id !== item.item.id))
    }

    getItemAmount(itemid: string): number {
        return this.getItemsFromStorage().find(cartItem => cartItem.item.id === itemid).amount; 
    }

    updateItemAmount(item: Item, amount: number): void {
        this.saveItemsToStorage(this.getItemsFromStorage().filter(i => i.item.id !== item.id));
        const cartItem = new CartItem();
        cartItem.item = item;
        cartItem.amount = amount;
        this.saveNewItem(cartItem);
    }

    getTotalPrice(): number {
        const totArr = this.getItemsFromStorage().map(cartItem => cartItem.amount * cartItem.item.price);
        var tot = 0;
        for(let i = 0; i < totArr.length; i++)
        {
            tot += totArr[i];
        }

        return tot;
    }
}