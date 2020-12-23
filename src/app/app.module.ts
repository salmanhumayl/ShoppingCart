import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ItemDetailComponent } from './components/shopping-cart/item-detail/item-detail.component';
 import { ItemImagesComponent } from './components/shopping-cart/item-detail/item-images/item-images.component';
import { ItemImagesSingleComponent } from './components/shopping-cart/item-detail/item-images/item-images-single/item-images-single.component';
import { CartDetailComponent } from './components/shopping-cart/cart/cart-detail/cart-detail.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuardService  } from './guard/auth-guard.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes:Routes=[
  {path: 'home', component: ShoppingCartComponent},
  {path: 'product/:id', component: ItemDetailComponent},
  {path: 'mycartDetail', component: CartDetailComponent},
  {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path: 'home/:id', component: ItemDetailComponent},
  {path: 'register', component: RegistrationComponent},

  {path: '', redirectTo:'/home',pathMatch:'full'}


];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ItemDetailComponent,
    ItemImagesComponent,
    ItemImagesSingleComponent,
    CartDetailComponent,
    LoginComponent,
    CheckoutComponent,
    LogoutComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
