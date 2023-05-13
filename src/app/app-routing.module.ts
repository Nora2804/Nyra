import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './component/delete/delete.component';
import { AddComponent } from './component/add/add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: AddComponent },
  { path: 'delete', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

