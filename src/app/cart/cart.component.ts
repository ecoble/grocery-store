import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  hasBeenCleared: boolean = false;
  tot: number;

  constructor(private storageService: StorageService,
              public snackbar: MatSnackBar) {
    
   }

  ngOnInit() {
    this.getTotalPrice();
  }

  getTotalPrice()
  {
    this.tot = this.storageService.getTotalPrice();
  }

  checkOut(): void {
    this.snackbar.open("You've checked out. You will be billed $" + this.tot.toFixed(2) + " shortly.", null, { duration: 3000})
    this.storageService.clearStorage();
    this.getTotalPrice();
    this.hasBeenCleared = true;
  }

  isEmpty(): boolean {
    return this.storageService.getTotalPrice() == 0;
  }

}
