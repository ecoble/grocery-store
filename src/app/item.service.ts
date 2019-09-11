import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, forkJoin} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Categories } from './categories';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  private itemListUrl = 'api/categories';

  getItemList(catid: string): Observable<Item[]> {
    return this.http.get<Category[]>(this.itemListUrl).
    pipe(map(arr => arr[Categories[catid]].items));
  }

  getItemCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.itemListUrl);
  }

  getItemCategory(catid: string): Observable<Category> {
    return this.http.get<Category[]>(this.itemListUrl).pipe(map(arr => arr[Categories[catid]]));
  }

  getItem(id: string): Observable<Item> {
    return this.getAllItems().pipe(map(items => items.find(x => x.id === id)));
     
  }

  getAllItems(): Observable<Item[]> {
    const allItems = [];
    
    for(let i = 0; i < 5; i++)
    {
      allItems.push(this.http.get<Category[]>(this.itemListUrl).pipe(map(arr => arr[i].items)));
    }
  
    return forkJoin(allItems).pipe(
      map(responses => {
        
        return[].concat(...responses);
      }));
  }
}
