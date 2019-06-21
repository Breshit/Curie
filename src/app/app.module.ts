import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { HomeComponent } from './home/home.component';
import { SimuladoComponent } from './simulado/simulado.component';
import { QuestaoComponent } from './questao/questao.component';
import { ContsComponent } from './conts/conts.component';
import { ResumoComponent } from './resumo/resumo.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { NgbModal, NgbModalModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'admin', component: AdministradorComponent},
  {path:'simu', component: SimuladoComponent},
  {path:'quest', component: QuestaoComponent},
  {path:'conts',component: ContsComponent},
  {path:'res',component: ResumoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdministradorComponent,
    HomeComponent,
    AdministradorComponent,
    SimuladoComponent,
    QuestaoComponent,
    ContsComponent,
    ResumoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModalModule,
    NgbCollapseModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }