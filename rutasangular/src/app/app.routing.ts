import { HomeComponent } from "./components/home.component/home.component";
import { CineComponent } from "./components/cine.component/cine.component";
import { MusicaComponent } from "./components/musica.component/musica.component";
//necesitamos una serie de modulos que se encuentran dentro de angular/router
import{Routes, RouterModule} from "@angular/router"
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound.component/notfound.component";

//necesitamos un array con las rutas dicho array sera de tipo routes
const appRoutes: Routes=[
    {path:"", component: HomeComponent},
    {path:"cine", component: CineComponent},
    {path: "musica", component:MusicaComponent},
    {path:"**",component:NotfoundComponent}
]
//desde esta clase debemos exportar el array de routes xomo provider
export const appRoutingProvider: any[] = []
//las propias rutas a exportar 
export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes)