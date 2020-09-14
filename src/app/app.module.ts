import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { StarComponent } from './rating/star.component';
import { StarFillComponent } from './rating/starfill.component';
import { RatingComponent } from './rating/rating.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StarComponent,
    StarFillComponent,
    RatingComponent,
    AdvertisementsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
