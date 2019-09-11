import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from "../item";
import { ItemService } from "../item.service";
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnChanges {

  @Input() clear;

  items : Item[];
  catid: string;
  cart = false;

  selectedItem: Item;

  onSelect(item: Item): void {
    this.selectedItem = item; 
  }

  constructor(private itemService: ItemService,
              private storageService: StorageService,
              private route: ActivatedRoute) {
                if(this.route.snapshot.paramMap.get('catid') === null)
                {
                  this.setItemListFromStorage();
                  this.cart = true;
                }
                else {
                  this.route.params.subscribe(params => {
                      this.catid = params['catid'];
                      this.setItemList();
                  });
                }
              }

  ngOnInit() {
  }

  noItems(): boolean {
    return this.cart && (this.items === undefined || this.items.length === 0);
  }

  setItemList(): void {
    this.itemService.getItemList(this.catid).subscribe(items => this.items = items);
  }

  setItemListFromStorage(): void {
    this.items = this.storageService.getItemsFromStorage().map(cartItem => cartItem.item);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.clear.currentValue === true) {
      this.setItemListFromStorage();
    }
  }

}
