import { Injectable } from '@angular/core';
import { Listar5 } from './administrador/listar5';
import { Listar4 } from './administrador/listar4';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService {
	ip = "http://localhost:3000/";
	cont_id: any;
	alternativa$: Observable<Listar5[]>;

	constructor(public http: HttpClient){
		this.cont_id = null;
		//this.questao$ = this.http.get<Listar3[]>(this.ip+'questoes');
	}

	getAlternativa(questao: Listar4): Observable<Listar5[]>{
		this.alternativa$ = this.http.get<Listar5[]>(this.ip+'alternativas/'+questao.id);
		return this.alternativa$;			
	}
}
