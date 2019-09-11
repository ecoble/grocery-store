import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'item-list/:catid', component: ItemListComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'item/:id', component: ItemComponent},
  {path: 'cart', component: CartComponent},
  {path: 'item/:id/:cart', component: ItemComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
