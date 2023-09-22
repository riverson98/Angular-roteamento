import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';
const routes: Routes = [
  //define rotas para os componentes
  {path:'', component: TitleComponent, pathMatch:'full'},
  //adiciona filhos para a rota
  //portifolio
  //portifolio/id
  {path:'portifolio', component: CardComponent, children:[
    {path:':id', component: CardComponent},
    {path:':id/:token', component: CardComponent}
  ]},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule {}
