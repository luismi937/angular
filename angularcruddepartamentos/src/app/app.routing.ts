import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartamentosComponentComponent } from "./components/departamentos-component.component/departamentos-component.component";
import { CreateComponent } from "./components/create-component/create-component";
import { DetailsComponent } from "./components/details-component/details-component";

const routes: Routes = [
    {path: "", component: DepartamentosComponentComponent},
    {path:"create", component: CreateComponent},
    {path:"details/:id/:nombre/:localidad", component:DetailsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}