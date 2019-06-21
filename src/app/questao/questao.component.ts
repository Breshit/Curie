import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista1 } from '../administrador/listar1';
import { Listar2 } from '../administrador/listar2';
import { Listar3 } from '../administrador/listar3';
import { DisciplinaService } from '../disciplina.service';
import { ConteudoService } from '../conteudo.service';
import { QuestaoService } from '../questao.service';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {
	disciplina$:Lista1[];
	conteudo$: Listar2[];
	questao$: Listar3[];
	lixo: Lista1;
	lixo2: Listar2;
	lixo3: Listar3;

	closeResult: String;

	isCollapsed: boolean = true;
	constructor(public questaoService: QuestaoService, public http: HttpClient, private modalService: NgbModal, private disciplinaService: DisciplinaService, private conteudoService: ConteudoService) {
		this.lixo = new Lista1();
		this.lixo2 = new Listar2();
		this.lixo3 = new Listar3();
	}

	ngOnInit() {
		this.getDiscs();
		//this.getCont();
	}

	getDiscs(){
		this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
			this.disciplina$ = disciplinas;
		});
	}
	getCont(e){
		console.log(e);
		this.conteudoService.getConteudos(e).subscribe(conteudos => {
			this.conteudo$ = conteudos;
		});
	}
	getQuestao(){

	}

	open(content){
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
	}

	addQuestao(e){
		this.lixo3.cont = e.value.cont;
		this.lixo3.enun = e.value.enun;
		this.lixo3.letra = e.value.certa;
		this.lixo3.alt1 = "a) "+e.value.op1;
		this.lixo3.alt2 = "b) "+e.value.op2;
		this.lixo3.alt3 = "c) "+e.value.op3;
		this.lixo3.alt4 = "d) "+e.value.op4;
		this.lixo3.alt5 = "e) "+e.value.op5;

		this.questaoService.addQuestao(this.lixo3)
		// .subscribe(questao => {
		// 	this.questao$.push(questao);
		// });	
	}

	addConts(e){
		this.lixo2.disc = e.value.disc;
		this.lixo2.cont = e.value.cont;
		this.conteudoService.addConteudo(this.lixo2).subscribe(conteudos => {
			this.conteudo$.push(conteudos);
		});	
	}

	addDisc(e){
		this.lixo.disc = e.value.disc;
		this.disciplinaService.addDisciplina(this.lixo).subscribe(disciplina => {
			this.disciplina$.push(disciplina);
		});			
	}

}
