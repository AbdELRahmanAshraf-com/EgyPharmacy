import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrugService } from './drug.service';
import { ElementComponent } from './element/element.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DashboardComponent,
    ElementComponent,
    FavouriteComponent,
    LikesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [DrugService],
  bootstrap: [AppComponent],
})
export class AppModule {}
