import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HaridorComponent } from './haridor/haridor.component';

export const routes: Routes = [
    { path: '', redirectTo: 'haridor', pathMatch: 'full' },
    { path: 'haridor', component: HaridorComponent },
    { path: 'haridor/:id', component: ProductComponent },
    { path: 'mycart', component: HaridorComponent }
];
