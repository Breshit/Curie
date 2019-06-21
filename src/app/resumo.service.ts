import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Listar8 } from './administrador/listar8';

@Injectable({
	providedIn: 'root'
})
export class ResumoService {
	ip = "http://localhost:3000/";
	//user$: Observable<Listar7[]>;
	arquivo$: any;

	//https://academind.com/learn/angular/snippets/angular-image-upload-made-easy/
	constructor(public http: HttpClient){

	}

	upload(arquivo: any){
		console.log(arquivo.arquivo);
		this.http.post(this.ip+"img", arquivo.arquivo)
		.subscribe(
			res => {
				console.log("aaa");
			},
			err => console.log(err)
		);
	}

	enviarDados(arquivo){
		console.log(arquivo);
		var arq = JSON.parse(JSON.stringify(arquivo));
		console.log(arq);
		this.http.post(this.ip+"resumo", arq)
		.subscribe(
			res => {
				console.log("enviou");
			},
			err => console.log(err)
		);
	}

	download(){
		this.arquivo$ = this.http.get<any[]>(this.ip+"resumo");
		return this.arquivo$;
	}
}
