<!DOCTYPE html>
<html lang="pt-br">

<head>
<meta charset="utf-8">
<title>Clube de Ciências</title>

	<!-- Custom styles for this template -->
	<link href="style.css" rel="stylesheet">
	<link href="bootstrap-4.1.3-dist/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Euphoria+Script" rel="stylesheet">  

	<script src="bootstrap-4.1.3-dist/js/bootstrap.js"></script>
	<script src="bootstrap-4.1.3-dist/js/jquery-3.3.1.js"></script>
	<script src="bootstrap-4.1.3-dist/js/popper.js"></script>
	<script src="bootstrap-4.1.3-dist/js/bootstrap.bundle.js"></script>

</head>
<body>

<div class="progress">
               <div class="progress-bar" role="progressbar" [style.width.%]="porcent" style="text-align: center;" [attr.aria-valuenow]="porcent" aria-valuemin="0" aria-valuemax="100" [ngStyle]="{'background-color': flag_timeover? 'red' : 'green'}"></div>
               <h6 class="justify-content-center d-flex position-absolute w-100 h6 card-text cd-t">{{tempo}}</h6>
</div>
<div class="card-body card-body-adm-tt">

	<h1 class="card-text cd-s" >Nome do conteúdo</h1>
	<form #quiz="ngForm" (ngSubmit)="enviarQuiz(quiz)">
		<div *ngFor="let q of teste">
		        <div class="card-body card-body-adm-lt">       
				<h3 class="card-text cd-t">Questão - {{q.questao.enunciado}}</h3>
 			        <div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="radio" [disabled]="flag_timeover" name="{{q.alternativas.questao_id}}" value="A" ngModel #a="ngModel"></div></div><p class="card-text cd-t-sm">{{q.alternativas.descricao1}}</p></div>
				<div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="radio" [disabled]="flag_timeover" name="{{q.alternativas.questao_id}}" value="B" ngModel #b="ngModel"></div></div><p class="card-text cd-t-sm">{{q.alternativas.descricao2}}</p></div>
				<div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="radio" [disabled]="flag_timeover" name="{{q.alternativas.questao_id}}" value="C" ngModel #c="ngModel"></div></div><p class="card-text cd-t-sm">{{q.alternativas.descricao3}}</p></div>
				<div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="radio" [disabled]="flag_timeover" name="{{q.alternativas.questao_id}}" value="D" ngModel #d="ngModel"></div></div><p class="card-text cd-t-sm">{{q.alternativas.descricao4}}</p></div>
				<div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="radio" [disabled]="flag_timeover" name="{{q.alternativas.questao_id}}" value="E" ngModel #e="ngModel"></div></div><p class="card-text cd-t-sm">{{q.alternativas.descricao5}}</p></div>
			</div>
		</div>
	</form>
<button type="submit" class="btn btn-primary botao-sub cd-t" (click)="open(resps)">Enviar</button>
<div class="card-body card-body-adm-tt"> </div>
<div class="card-body card-body-adm-tt"> </div>

</div>

	<ng-template #resps let-modal>
		        <div class="modal-header">
		                       <h4 class="modal-title card-text cd-s" id="modal-basic-title">Resultado</h4>
		                       <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
		                                       <span aria-hidden="true">&times;</span>
		                       </button>
		        </div>
		        <div class="modal-body">
		                       <h2 class="card-text cd-t" >Acertos: 0</h2>
		                       <table class="table">
		                                       <thead>
		                                                       <tr>
		                                                                       <th class="card-text cd-t" scope="col">Questão</th>
		                                                                       <th class="card-text cd-t" scope="col">Sua resposta</th>
		                                                                       <th class="card-text cd-t" scope="col">Resposta Certa</th>
		                                                       </tr>
		                                       </thead>
		                                       <tbody>
		                                                       <tr *ngFor="let r of respostas" [ngStyle]="{'background-color': r.acertou? 'green' : 'red'}">
	<!-- this.respostas.push({"questao": q.id,"alt_user":e.value[q.id],"alt_c":q.letra,"acertou":false}); -->
		                                                                       <td class="card-text cd-t" >{{r.questao}}</td>
		                                                                       <td class="card-text cd-t" >{{r.alt_user}}</td>
		                                                                       <td class="card-text cd-t" >{{r.alt_c}}</td>
		                                                       </tr>
		                                       </tbody>
		                       </table>             
		                       <a class="btn btn-primary botao-sub cd-t" routerLink="/user" (click)="modal.dismiss('Cross click')">Pronto</a>
		        </div>
	</ng-template>


</body>
