
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule, DropdownModule, ModalModule, TooltipModule, PopoverModule, ButtonsModule} from 'angular-bootstrap-md';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'ng-uikit';
import { DiscuterComponent } from './discuter/discuter.component';
import { LoginComponent } from './component/login/login/login.component';
import { GroupeComponent } from './component/groupe/groupe.component';
import { RegistreComponent } from './component/login/registre/registre.component';
import { ConnexionComponent } from './component/login/connexion/connexion.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './component/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { AjoutgroupeComponent } from './component/groupe/ajoutgroupe/ajoutgroupe.component';
import { ListeAmisComponent } from './component/chat/liste-amis/liste-amis.component';
import { ItemComponent } from './component/chat/item/item.component';
import { PublicationComponent } from './component/publication/publication/publication.component';
import { StatusComponent } from './component/publication/status/status.component';
import { SousCommentaireComponent } from './component/publication/sous-commentaire/sous-commentaire.component';
import { ZoneTextComponent } from './component/publication/zone-text/zone-text.component';
import { ChatMessageComponent } from './component/message/chat-message/chat-message.component';
import { ZoneTextSousCommentComponent } from './component/publication/zone-text-sous-comment/zone-text-sous-comment.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AuthGuard} from "./guard/auth-guard";
import {LoginIntercepter} from "./interceptor/loginIntercepter";
import { ProfileComponent } from './component/profile/profile/profile.component';
import { ModifierProfileComponent } from './component/profile/modifier-profile/modifier-profile.component';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    DiscuterComponent,
    LoginComponent,
    GroupeComponent,
    RegistreComponent,
    ConnexionComponent,
    HeaderComponent,
    AjoutgroupeComponent,
    ListeAmisComponent,
    ItemComponent,
    PublicationComponent,
    StatusComponent,
    SousCommentaireComponent,
    ZoneTextComponent,
    ChatMessageComponent,
    ZoneTextSousCommentComponent,
    ProfileComponent,
    ModifierProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot(),
    AccordionModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  providers: [AuthGuard
    , LoginIntercepter
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
