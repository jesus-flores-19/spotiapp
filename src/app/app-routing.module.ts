import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';

const routes: Routes = [
  {path:"home",  component: HomeComponent},
  {path: "search", component: SearchComponent},
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
