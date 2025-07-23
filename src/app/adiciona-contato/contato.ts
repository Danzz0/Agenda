import { Tipo } from "./Tipo";


export class Contato {
    private _nome: string;
    private _telefone: string;
    private _email: string;
    private _aniversario:string | undefined;
    private _tipo: Tipo | undefined;

    constructor(nome: string, telefone: string, email: string, aniversario?: string, tipo?:Tipo) {
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;

        if (aniversario){
            this._aniversario = aniversario;
        }

        if (tipo){
            this._tipo = tipo;
        }
    }


    get nome(){
        return this._nome;
    }
    
    get telefone(){
        return this._telefone
    }

    get email(){
        return this._email;
    }

    get aniversario(){
        if (this._aniversario != undefined){
            return this._aniversario;
        }
        return "undefined";
    }

    get tipo(){

        if (this._tipo != undefined){
            return this._tipo;
        } 

        return Tipo.INDEFINIDO;
    }



    set nome(nome:string){
        this._nome = nome;
    }
    
    set telefone(tel:string){
        this._telefone = tel;
    }

    set email(email:string){
        this._email = email;
    }

    set aniversario(aniversario:string){
        this.aniversario = aniversario;
    }

    set tipo(tipo:Tipo){
        this.tipo = tipo;
    }

   

}
