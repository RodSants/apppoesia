import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Autor } from '../../model/autor';
import { Poesia } from '../../model/poesia';


@IonicPage()
@Component({
  selector: 'page-autor-detalhe',
  templateUrl: 'autor-detalhe.html',
})
export class AutorDetalhePage {

  autor : Autor;
  poesias : Poesia[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.autor = this.navParams.get('autor');
    this.poesias = this.autor.poesias;
    
  }

}
