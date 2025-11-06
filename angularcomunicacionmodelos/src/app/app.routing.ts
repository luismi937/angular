import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";
import { PadrecochesComponent } from "./components/padrecoches.component/padrecoches.component";
import { PadredeportesComponent } from "./components/padredeportes.component/padredeportes.component";

const routes: Routes=[
    {path: "listaproductos", component: ListaproductosComponent},
    {path: "padrecoches", component: PadrecochesComponent},
    {path: "padredeportes", component: PadredeportesComponent}
]
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);