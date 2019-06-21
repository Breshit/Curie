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


<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4 cd-s">Menu</h5>
      <span class="text-muted">
		<a class="nav-link cd-t" href="simulados.php">Simulados</a>  		
		<a class="nav-link cd-t" href="#">Resumos</a>
  		<a class="nav-link cd-t" href="#">Projetos</a>
		<a class="nav-link cd-t" href="#">Perfil</a>	
  		<a class="nav-link disabled cd-t" href="#">Planos Futuros</a></span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Alterna navegação">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>

<div class="card-intro-img-adm"><img class="card-img-top" src="img/logo_sm.jpg" alt="Card image cap"></div>


<form #addQ="ngForm" (ngSubmit)="addQuestao(addQ)">
		<div class="card-body card-body-adm-tt"><p class="card-text cd-s">Olá Querido Professor, seja feliz elaborando as questões</p>
                <div class="form-group card-text col-md-12">
                <div class="card-body card-body-adm-lt"><label class="card-text cd-t">Disciplina</label>
                              <select id="disc" class="form-control"  name="disc" ngModel required (change)="escCont($event.target.value)">
                              	<option *ngFor="let d of disciplina$" [value]="d">{{d.disc}}</option>
                               </select>
                               <label class="card-text cd-t">Conteúdos</label>
                               	<select id="cont" class="form-control"  name="cont" ngModel #conteudo="ngModel" required>
                                <option *ngFor="let c of conteudo$" [value]="c">{{c.cont}}</option>
                               	</select>
                               <label class="card-text cd-t">Enunciado</label>
                               	<textarea name="enun" type="text" id="enun" class="form-control" ngModel required #enun="ngModel"></textarea>
                               
			<label class="card-text cd-t">Opção 1</label>
                               <div class="input-group mb-3">
		                       <div class="input-group-prepend">
		                       	 <div class="input-group-text">
		                         <input type="checkbox" name="certa" value="A" ngModel #certa="ngModel">
		                         </div>
		                        </div>
                                <input name="op1"  type="text" id="op1" aria-label="Text input with checkbox" class="form-control" ngModel required #op1="ngModel">
                                </div>

                        <label class="card-text cd-t">Opção 2</label>
                               <div class="input-group mb-3">
					<div class="input-group-prepend">
                                          <div class="input-group-text">
                                          <input type="checkbox" name="certa" value="B" ngModel #certa="ngModel">
                                          </div>
                                         </div>
                               <input name="op2" type="text" id="op2" aria-label="Text input with checkbox" class="form-control" ngModel required #op1="ngModel">
                               </div>

			<label class="card-text cd-t">Opção 3</label>
                               <div class="input-group mb-3">
                                       <div class="input-group-prepend">
                                         <div class="input-group-text">
                                         <input type="checkbox" name="certa" value="C" ngModel #certa="ngModel">
                                         </div>
                                       </div>
                               <input name="op3" type="text" id="op3" aria-label="Text input with checkbox" class="form-control" ngModel required #op1="ngModel">
                               </div>

			<label class="card-text cd-t">Opção 4</label>
                               <div class="input-group mb-3">
                                      <div class="input-group-prepend">
                                             <div class="input-group-text">
                                             <input type="checkbox" name="certa" value="D" ngModel #certa="ngModel">
                                             </div>
                                      </div>
                               <input name="op4" type="text" id="op4" aria-label="Text input with checkbox" class="form-control" ngModel required #op1="ngModel">
                               </div>

                        <label class="card-text cd-t">Opção 5</label>
                               <div class="input-group mb-3">
                                      <div class="input-group-prepend">
                                             <div class="input-group-text">
                                             <input type="checkbox" name="certa" value="E" ngModel #certa="ngModel">
                                             </div>
                                      </div>
                              <input name="op5" type="text" id="op5" aria-label="Text input with checkbox" class="form-control" ngModel required #op1="ngModel">
                              </div>

                </div>
                <button type="submit" class="btn btn-primary botao-sub cd-t">Enviar</button>
		<button class="btn btn-primary botao-add cd-t" (click)="open(content)">Add disciplina</button>	
		<button class="btn btn-primary botao-add cd-t" (click)="open(content2)">Add conteudo</button>
</form>		
		</div>
</div>

 
<ng-template #content let-modal>
	<div class="modal-header card-text">
	        <h4 class="modal-title cd-s" id="modal-basic-title">Adicionar disciplina</h4>
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
                </button>
	</div>
        <div class="modal-body">
	        <form #disc="ngForm" (ngSubmit)="addDisc(disc)">
			<div class="form-group">
		                <label class="cd-t">Disciplina</label>
		                <input type="text" name="disc" placeholder="Disciplina" ngModel required #nomeDisc="ngModel">
                        </div>
                        <button type="submit" class="btn btn-outline-dark cd-t">Save</button>
                 </form>

                </div>

</ng-template>

<ng-template #content2 let-modal>
                <div class="modal-header card-text">
                      <h4 class="modal-title cd-s" id="modal-basic-title">Adicionar conteudo</h4>
                      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                              <span aria-hidden="true">&times;</span>
                      </button>
	        </div>

                <div class="modal-body card-text">
			<form #cont="ngForm" (ngSubmit)="addConts(cont)">
      				<div class="form-group">
	     			<label class="cd-t">Disciplina</label>
			      	  <select id="disc" class="form-control"  name="disc" ngModel required (change)="getCont($event.target.value)">
				  <option *ngFor="let d of disciplina$" [value]="d.id">{{d.disc}}</option>
			     	  </select>
	      			<label class="cd-t">Nome</label>
		      		  <input type="text" name="cont" placeholder="Teste" ngModel required #nomeCont="ngModel">
      				</div>
      			<button type="submit" class="btn btn-outline-dark cd-t">Save</button>
			</form>
		</div>
</ng-template>


 
<script type="text/javascript">
$('.collapse').collapse()
</script>


</body>
