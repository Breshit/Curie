import { Injectable } from '@angular/core';
import { Listar4 } from './administrador/listar4';
import { Listar3 } from './administrador/listar3';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class QuestaoService {
	ip = "http://localhost:3000/";
	cont_id: any;
	questao$: Observable<Listar4[]>;

	constructor(public http: HttpClient){
		this.cont_id = null;
		//this.questao$ = this.http.get<Listar3[]>(this.ip+'questoes');
	}

	getQuestao(questao: Listar4): Observable<Listar4[]>{
		//console.log(this.questao$);
		console.log("oaishaodish",questao.cont);
		this.questao$ = this.http.get<Listar4[]>(this.ip+'questoes/'+questao.cont);
		console.log("a",this.questao$);
		return this.questao$;			
	}

	addQuestao(questao : Listar3): Observable<Listar3>{
		this.http.post(this.ip+'questoes/', questao)
		.subscribe(
			res => {console.log("FUNCIONOU")},
			err => {console.log(err);}
		);
		return of(questao);
	}
}