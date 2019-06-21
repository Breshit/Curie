import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConteudoService } from '../conteudo.service';
import { DisciplinaService } from '../disciplina.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Listar2 } from '../administrador/listar2';
import { Lista1 } from '../administrador/listar1';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	isCollapsed: boolean = true;
	conteudo$: Listar2[];
	disciplina$: Lista1[];
	teste: Object[];
	user: any;

	constructor(public authenticationService: AuthenticationServiceService, public conteudoService: ConteudoService, public disciplinaService: DisciplinaService, private route: ActivatedRoute) {
		this.teste = [];
	}

	ngOnInit() {
		this.user = JSON.parse(localStorage.getItem('currentUser'));
		console.log(this.user);
		this.getDiscs();
	}

	logout(){
		this.authenticationService.logout();
	}
	getDiscs(){
		this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
			this.disciplina$ = disciplinas;
			this.getCont();
		});
	}

	getCont(){
		// console.log(this.disciplina$);
		for(let d of this.disciplina$){
			this.conteudoService.getConteudos(d.id).subscribe(conteudos => {
				this.teste.push({"disciplina": d, "conteudos": conteudos});
			});
		}
	}
}
