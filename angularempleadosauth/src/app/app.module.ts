import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { SubordinadosComponent } from './components/subordinados.component/subordinados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
