import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { SwiperModule } from 'swiper/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ImgComponent } from './img/img.component'
import { ProductComponent } from './product/product.component'
import { CategoriesComponent } from './categories/categories.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ReversePipe } from './pipes/reverse.pipe'
import { HighlightDirective } from './directives/highlight.directive'
import { HeaderComponent } from './header/header.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthComponent } from './auth/auth.component'
import { TimeInterceptor } from './interceptors/time.interceptor'
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component'

@NgModule({
    declarations: [
        AppComponent,
        ImgComponent,
        ProductComponent,
        CategoriesComponent,
        ProductListComponent,
        ReversePipe,
        HighlightDirective,
        HeaderComponent,
        ProductDetailComponent,
        AuthComponent,
        HomeComponent,
        NotFoundComponent,
        CategoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        SwiperModule,

        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TimeInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
