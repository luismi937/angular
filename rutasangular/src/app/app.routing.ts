// import { HomeComponent } from "./components/home.component/home.component";
// import { CineComponent } from "./components/cine.component/cine.component";
// import { MusicaComponent } from "./components/musica.component/musica.component";
// import { NotfoundComponent } from "./components/notfound.component/notfound.component";
// import { NumeroDobleComponent } from "./components/numerodoble.component/numerodoble.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

// ✅ Dejamos solo las importaciones necesarias
import { MenutablamultiplicarComponent } from "./components/menutablamultiplicar.component/menutablamultiplicar.component";
import { TablamultiplicarroutingComponent } from "./components/tablamultiplicarrouting.component/tablamultiplicarrouting.component";

// 🔹 Definición de las rutas (solo menú y tabla)
const appRoutes: Routes = [
  // { path: "", component: HomeComponent },
  // { path: "cine", component: CineComponent },
  // { path: "musica", component: MusicaComponent },
  // { path: "numerodoble", component: NumeroDobleComponent },
  // { path: "numerodoble/:numero", component: NumeroDobleComponent },

  // ✅ Dejamos solo las rutas que queremos
  { path: "", redirectTo: "menutablamultiplicar", pathMatch: "full" },
  { path: "menutablamultiplicar", component: MenutablamultiplicarComponent },
  { path: "tabla/:numero", component: TablamultiplicarroutingComponent },

  // { path: "**", component: NotfoundComponent },
];

// Desde esta clase debemos exportar el array de routes como provider
export const appRoutingProvider: any[] = [];

// Las propias rutas a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
