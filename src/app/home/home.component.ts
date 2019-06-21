import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listar6 } from '../administrador/listar6';
import { Listar7 } from '../administrador/listar7';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	flag: Boolean;
	band: Boolean;
	admin: Listar6;
	user: Listar7;
	
	constructor(public authenticationService: AuthenticationServiceService, private router: Router){
		this.admin = new Listar6();
		this.user = new Listar7();
	}

	ngOnInit() {
		localStorage.removeItem('currentUser');
		localStorage.removeItem('typeUser');
		this.flag = true;
	}

	se( e: String) {
		this.flag = (e == "Estudante")? true : false; 
	}

	login(e){
		console.log(e.value);
		console.log(this.flag);
		if(this.flag){
			this.user.id = null;
			this.user.nome = null;
			this.user.turma = null;
			this.user.ra = e.value.ra;
			this.postUsuario(this.user);
			localStorage.setItem('typeUser', 'user');
		}else{
			this.admin.login = e.value.login;
			this.admin.senha = e.value.senha;
			this.postAdmin(this.admin);
			localStorage.setItem('typeUser', 'admin');
			// if(a){this.auth.sendToken(e.value.login);}
			// else{this.router.navigate(["/admin"]);}
		}
	}

	postAdmin(e){
		this.authenticationService.loginAdmin(e.login, e.senha)
		.pipe(first())
		.subscribe(
			data => {
				console.log("aaa",data);
				this.router.navigate(['/admin']);
			},
			error => {
				console.log(error.status);
				this.error();
			}
		);
	}

	postUsuario(e){
		this.authenticationService.loginUser(e.ra)
		.pipe(first())
		.subscribe(
			data => {
				this.router.navigate(['/user']);
			},
			error => {
				console.log(error.status);
				this.error();
			}
		);
	}

	error(){
		this.band = true;
	}
}