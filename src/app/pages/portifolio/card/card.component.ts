import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // http://localhost:4200/portifolio/{1}
  constructor (
    //recupera param e querysParams da url
    private activeRoute: ActivatedRoute,
    //força componente a navegar para outra rota
    private navegador:Router
    ) {
    //busca params da url
    //this.activeRoute.params.subscribe(
      //res => console.log(res)
    //)
    
    // busca params da url filha
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    // http://localhost:4200/portifolio/1?{name=riverson&token=123}
      this.activeRoute.queryParams.subscribe(
        res => console.log(res)
      )
  }

  ngOnInit():void {
    setInterval(() => {
      //forçando o componente para a rota /
      this.navegador.navigate(['/'])
    }, 5000)
  }

}
