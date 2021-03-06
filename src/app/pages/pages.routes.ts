import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'about', component: AboutComponent, data: { titulo: 'Nosotros' } },
            { path: 'product/:cod', component: ProductComponent, data: { titulo: 'Producto' } },
            { path: 'products/:cod', component: ProductsComponent, data: { titulo: 'Productos' } },
            { path: 'home', component: HomeComponent, data: { titulo: 'Inicio' } },
            
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );