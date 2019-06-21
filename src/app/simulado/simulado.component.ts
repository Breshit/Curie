import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestaoService } from '../questao.service';
import { AlternativaService } from '../alternativa.service';
import { Listar3 } from '../administrador/listar3';
import { Listar4 } from '../administrador/listar4';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-simulado',
	templateUrl: './simulado.component.html',
	styleUrls: ['./simulado.component.css']
})

export class SimuladoComponent implements OnInit {
	questao$: Listar4[] = [];
	lixo: Listar4;
	teste: Object[];
	respostas: Object[];
	acert_cont: number;

	seconds: number;
	timer;
	tempo: any;
	porcent: any;

	flag_timeover: boolean;

	nome: any;
	constructor(public alternativaService: AlternativaService, public questaoService: QuestaoService, public http: HttpClient, 
		private modalService: NgbModal, private route: ActivatedRoute) { 
		this.lixo = new Listar4();
		this.teste = [];
		this.respostas = [];
		this.seconds = 0;
		this.flag_timeover = false;
	}

	ngOnInit(){
		this.route.queryParams.subscribe(
			res => {
				// console.log(res.cont);
				this.getQuestao(res.cont);
				this.nome = res.nome;
				console.log(this.nome);
			},
			err => console.log(err)
		);		
	}

	relogio(){
		this.timer = setInterval(()=>{
			this.seconds++;
			this.tempo = Math.floor(this.seconds/3600)+':'+Math.floor(this.seconds/60)+':'+Math.floor(this.seconds%60);
			this.porcent = (this.seconds*100)/2700;
			if(this.porcent >= 100){
				this.flag_timeover = true;
				clearInterval(this.timer);
			}
		}, 1000);
	}

	open(content){
		clearInterval(this.timer);
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
	}

	getQuestao(e){
		this.lixo.cont = e;
		this.questaoService.getQuestao(this.lixo).subscribe(questao => {
			this.questao$ = questao;
			this.getAlternativa();
		});
	}

	getAlternativa(){
		for(let q of this.questao$){
			this.alternativaService.getAlternativa(q).subscribe(alts => {
				this.teste.push({"questao": q, "alternativas": alts[0]});
				// console.log(q);
			});
		}
		this.relogio();
	}

	enviarQuiz(e){
		for(let q of this.questao$){
			if(q.letra == e.value[q.id]){
				this.acert_cont++;
				this.respostas.push({"questao": q.id,"alt_user":e.value[q.id],"alt_c":q.letra,"acertou":true});
			}else{
				this.respostas.push({"questao": q.id,"alt_user":e.value[q.id],"alt_c":q.letra,"acertou":false});
			}
		}
	}
}