import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista1 } from './listar1';
import { Listar2 } from './listar2';
import { Listar3 } from './listar3';
import { DisciplinaService } from '../disciplina.service';
import { ConteudoService } from '../conteudo.service';
import { QuestaoService } from '../questao.service';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
	selector: 'app-administrador',
	templateUrl: './administrador.component.html',
	styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit {
	isCollapsed: boolean = true;
	admin: any;
	constructor(private authenticationService: AuthenticationServiceService){
		
	}

	ngOnInit(){
		this.admin = JSON.parse(localStorage.getItem('currentUser'));
		console.log("blablalb",this.admin);
	}

	logout(){
		this.authenticationService.logout();
	}
}