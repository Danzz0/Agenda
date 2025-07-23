import { Component } from '@angular/core';
import { Contato } from './contato';
import { CommonModule } from '@angular/common';
import { Tipo } from './Tipo';

@Component({
  selector: 'app-adiciona-contato',
  imports: [CommonModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContato {
  listaContatos: Contato[]
  listaTipo:string[]

  constructor() {
    this.listaContatos = []
    this.listaTipo = ["Amigo(a)", "Familiar", "Trabalho", "Faculdade", "Indefinido"]
  }



   adicionar(nome: string, telefone: string,  email: string, aniversario:string, tipo:string) {
     const novoCtt = new Contato(nome, telefone, email, aniversario, this.castTipo(tipo));
     this.listaContatos.push(novoCtt)
   }

   castTipo(tp:string){
      switch(tp){
        case Tipo.AMIGO:
          return Tipo.AMIGO
        case Tipo.FACULDADE:
          return Tipo.FACULDADE
        case Tipo.FAMILIA:
          return Tipo.FAMILIA
        case Tipo.TRABALHO:
          return Tipo.TRABALHO
        default:
          return Tipo.INDEFINIDO
      }
   }
}
