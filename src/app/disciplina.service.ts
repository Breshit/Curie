import { Injectable } from '@angular/core';
import { Lista1 } from './administrador/listar1';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DisciplinaService{
	ip = "http://localhost:3000/";
	disciplina$: Observable<Lista1[]>;
	
	constructor(public http: HttpClient) {
		this.disciplina$ = this.http.get<Lista1[]>(this.ip+'disciplina');
	}

	getDisciplinas(): Observable<Lista1[]> {
		//console.log(this.disciplina$);
		return this.disciplina$;
	}

	addDisciplina(disciplina : Lista1): Observable<Lista1>{
		this.http.post(this.ip+'disciplina', disciplina)
		.subscribe(
			res => {console.log("FUNCIONOU")},
			err => {console.log(err);}
			);
		return of(disciplina);
	}


  /*
  		this.http.post('http://10.4.36.250/disciplina', e.value)
		.subscribe(
			res => {console.log("FUNCIONOU CARAI")},
			err => {console.log("VOCÊ É UM MERDA MERMÃO", err);}
		);	
		*/
}
