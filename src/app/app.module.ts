import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/dashboard/components/dashboard/home.component';
import { LoginComponent } from './landingpage/components/login/login.component';
import { CreateDietComponent } from './modules/diet/components/create-diet/create-diet.component';
import { ListDietComponent } from './modules/diet/components/list-diet/list-diet.component';
import { MenuComponent } from './modules/core/pages/menu/menu.component';
import { LadingpageComponent } from './landingpage/page/ladingpage.component';
import { HelpComponent } from './landingpage/components/help/help.component';
import { FoodDietsComponent } from './landingpage/components/food-diets/food-diets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateDietComponent,
    ListDietComponent,
    MenuComponent,
    LadingpageComponent,
    HelpComponent,
    FoodDietsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
