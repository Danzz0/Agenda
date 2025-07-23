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

  constructor() {
    this.listaContatos = []
  }

   adicionar(nome: string, telefone: string,  email: string, aniversario:string) {
     const novoCtt = new Contato(nome, telefone, email, aniversario);
     this.listaContatos.push(novoCtt)
   }
}
