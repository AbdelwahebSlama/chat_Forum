import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login/login.component';
import {RegistreComponent} from './component/login/registre/registre.component';
import {NgModule} from '@angular/core';
import {GroupeComponent} from './component/groupe/groupe.component';
import {AjoutgroupeComponent} from './component/groupe/ajoutgroupe/ajoutgroupe.component';
import {ChatComponent} from "./chat/chat.component";
import {PublicationComponent} from "./component/publication/publication/publication.component";
import {AuthGuard} from "./guard/auth-guard";
import {ProfileComponent} from "./component/profile/profile/profile.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent},
  {path: '', component: GroupeComponent},
  {path: 'registre', component: RegistreComponent},
  {path: 'listegroupe', component: GroupeComponent},
  {path: 'ajoutgroupe', component: AjoutgroupeComponent, canActivate: [AuthGuard]},
  {path: 'satuts/:id', component: PublicationComponent, canActivate: [AuthGuard] },
  {path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  {path: 'satuts', component: PublicationComponent, canActivate: [AuthGuard], canDeactivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
