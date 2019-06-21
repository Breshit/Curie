import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class AuthenticationServiceService {
	ip = "http://localhost:3000/";
	constructor(private http: HttpClient, private route: Router) { }

	loginUser(ra: String){
		return this.http.post<any>(this.ip+"usuario", {ra: ra})
		.pipe(map(
			user => {
				if(user && user.id){
					localStorage.setItem('currentUser', JSON.stringify(user))
				}
				return user;
			}
			));
	}

	loginAdmin(login: String, senha: String){
		return this.http.post<any>(this.ip+"admin", {senha: senha, login: login})
		.pipe(map(
			admin =>{
				if(admin && admin.id){
					localStorage.setItem('currentUser', JSON.stringify(admin))
				}
				return admin;
			}
			));
	}

	logout(){
		localStorage.removeItem('currentUser');
		this.route.navigate(['']);
	}
}
