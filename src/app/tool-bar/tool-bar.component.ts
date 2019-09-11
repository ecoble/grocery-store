import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  title = 'Grocery Store';
  categories: Category[];
  allItems: Item[];
  searchText = "";

  constructor(private itemService: ItemService){}

  ngOnInit() {
    this.getItemCategories();
    this.getAllItems();
  }

  getItemCategories(): void {
    this.itemService.getItemCategories().subscribe(categories => this.categories = categories);
  }

  getAllItems(): void {
    this.itemService.getAllItems().subscribe(items => {this.allItems = items});
  }

}
