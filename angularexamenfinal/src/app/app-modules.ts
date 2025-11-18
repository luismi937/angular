import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HomeComponentComponents } from "./home-component.components/home-component.components";
import { AuthComponentsComponents } from "./auth-component.components/auth-component.components";
import { ProfileComponentComponents } from "./profile-component.components/profile-component.components";
import { ComprasComponentComponents } from "./compras-component.components/compras-component.components";
import { CubeDetailComponentComponents } from "./cube-detail-component.components/cube-detail-component.components";

@NgModule({
    declarations:[
        //  AppComponent,
         HomeComponentComponents,
         AuthComponentsComponents,
         ProfileComponentComponents,
         ComprasComponentComponents,
         CubeDetailComponentComponents
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component:HomeComponentComponents},
            {path: 'login', component: AuthComponentsComponents},
            {path: 'profile', component:ProfileComponentComponents},
            {path: 'compras', component:ComprasComponentComponents},
            {path: 'cube/id', component: CubeDetailComponentComponents}
        ])
    ],
    providers:[],
    // bootstrap:[AppComponent]
})

export class AppModule{}