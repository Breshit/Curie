import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista1 } from '../administrador/listar1';
import { Listar2 } from '../administrador/listar2';
import { Listar8 } from '../administrador/listar8';
import { DisciplinaService } from '../disciplina.service';
import { ConteudoService } from '../conteudo.service';
import { QuestaoService } from '../questao.service';
import { ResumoService } from '../resumo.service';

@Component({
	selector: 'app-resumo',
	templateUrl: './resumo.component.html',
	styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
	isCollapsed: boolean = true;

	disciplina$:Lista1[];
	conteudo$: Listar2[];
	teste: Object[];

	selectedFile: File = null;
  	fd = new FormData();
  	
  	lixo: Listar8;
  	// dados: Object[];
  	// resumos: Object[];

  	flag: boolean;

	constructor(public resumoService: ResumoService, public questaoService: QuestaoService, public http: HttpClient, private modalService: NgbModal, private disciplinaService: DisciplinaService, private conteudoService: ConteudoService){
		this.teste = [];
		this.lixo = new Listar8();
	}

	ngOnInit(){
		this.getDiscs();
		// this.getResumo();
		var tipo = localStorage.getItem('typeUser');
		if(tipo == "user"){
			this.flag = true;
		}else{
			this.flag = false;
		}
		console.log("abriu");
	}

	open(content){
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
	}

	getDiscs(){
		this.disciplinaService.getDisciplinas().subscribe(disciplinas => {
			this.disciplina$ = disciplinas;
		});
	}

	getCont(e){
		console.log("balksb",e);
		this.conteudoService.getConteudos(e).subscribe(conteudos => {
			this.conteudo$ = conteudos;
		});
	}

	createFormData(event) {
		console.log("entrou");
	    this.selectedFile = <File>event.target.files[0];
	    console.log(this.selectedFile);
	    this.fd = new FormData();
	    this.fd.append('file',this.selectedFile, this.selectedFile.name);
	    console.log(this.fd);
	}

	addResumo(e){
		console.log("blablabla",e);
		this.lixo.conteudo = e.value.cont;
		this.lixo.arquivo = this.fd;
		this.lixo.nome = this.selectedFile.name;
		this.resumoService.upload(this.lixo);
		this.fd.delete('file');
		this.fd.delete('filename');
		this.lixo.arquivo = null;
		// this.resumoService.enviarDados(this.lixo);
	}

/*	getResumo(){
		this.resumoService.download().subscribe(resumo =>{
			this.dados = resumo;
			console.log("a", resumo, "b", this.dados);
		});
		console.log("aaa",this.dados);	
	}*/
}
