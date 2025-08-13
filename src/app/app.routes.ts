import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HaridorComponent } from './haridor/haridor.component';

export const routes: Routes = [
    { path: 'haridor', component: HaridorComponent },
    { path: 'haridor/:id', component: ProductComponent },
];
