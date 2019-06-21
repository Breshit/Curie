import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista1 } from '../administrador/listar1';
import { Listar2 } from '../administrador/listar2';
import { DisciplinaService } from '../disciplina.service';
import { ConteudoService } from '../conteudo.service';
import { QuestaoService } from '../questao.service';

@Component({
	selector: 'app-conts',
	templateUrl: './conts.component.html',
	styleUrls: ['./conts.component.css']
})
export class ContsComponent implements OnInit {
	isCollapsed = true;
	
	disciplina$:Lista1[];
	conteudo$: Listar2[];
	teste: Object[];
	flag: boolean;
	constructor(public questaoService: QuestaoService, public http: HttpClient, private modalService: NgbModal, private disciplinaService: DisciplinaService, private conteudoService: ConteudoService){
		this.teste = [];
	}

	ngOnInit(){
		this.getDiscs();
		var tipo = localStorage.getItem('typeUser');
		if(tipo == "user"){
			this.flag = true;
		}else{
			this.flag = false;
		}
	}

	getDiscs(){
		this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
			this.disciplina$ = disciplinas;
			this.getCont();
		});
	}

	getCont(){
		for(let d of this.disciplina$){
			this.conteudoService.getConteudos(d.id).subscribe(conteudos => {
				this.teste.push({"disciplina": d, "conteudos": conteudos});
				console.log(this.teste);
			});
		}
	}
}
