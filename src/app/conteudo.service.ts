import { Injectable } from '@angular/core';
import { Listar2 } from './administrador/listar2';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class ConteudoService {
  ip = "http://localhost:3000/";
	conteudo$: Observable<Listar2[]>;
	lixo: Observable<Listar2[]>;
	disc_id: any;

  	constructor(public http: HttpClient){
  		this.disc_id = null;
  		//this.conteudo$ = this.http.get<Listar2[]>(this.ip+'conteudo/'+this.disc_id);
  	}

  	getConteudos(e): Observable<Listar2[]>{
  		//console.log(this.conteudo$);
  		console.log(e);
  		this.disc_id = e;
  		this.conteudo$ = this.http.get<Listar2[]>(this.ip+'conteudo/'+this.disc_id);
  		return this.conteudo$;
  	}

  	addConteudo(conteudo: Listar2): Observable<Listar2>{
  		this.http.post(this.ip+'conteudo', conteudo)
  		.subscribe(
  			res => {console.log("FUNCIONOU");},
  			err => {console.log(err);}
  		);
  		return of(conteudo);
  	}
}