import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { SwiperModule } from 'swiper/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ImgComponent } from './img/img.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthComponent } from './auth/auth.component'

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
        AuthComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        SwiperModule,

        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
