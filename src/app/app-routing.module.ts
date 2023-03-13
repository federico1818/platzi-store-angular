import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from 'src/app/pages/home/home.component'
import { CategoryComponent } from 'src/app/pages/category/category.component'
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component'
import { ProductShowComponent } from 'src/app/pages/product-show/product-show.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products/:id',
        component: ProductShowComponent
    },
    {
        path: 'category/:id',
        component: CategoryComponent
    },
    {
        path: 'admin',
        loadChildren: () => import('src/app/cms/cms.module').then(module => {
            return module.CmsModule
        })
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
