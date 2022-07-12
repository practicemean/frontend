import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDietsComponent } from './landingpage/components/food-diets/food-diets.component';
import { HelpComponent } from './landingpage/components/help/help.component';
import { InformationComponent } from './landingpage/components/information/information.component';
import { LadingpageComponent } from './landingpage/page/ladingpage.component';
const routes: Routes = [
  {
    
    path: '',
    component: LadingpageComponent,
    children: [
      {
        path: '',
        component: InformationComponent,
        children: [
          {
            path: 'Help',
            component: HelpComponent
          },
          {
            path: 'Food-diets',
            component: FoodDietsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
