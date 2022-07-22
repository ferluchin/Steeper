import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionGeneralComponent } from './pages/informacion-general/informacion-general.component';
import { InformacionTecnicaProyectoComponent } from './pages/informacion-tecnica-proyecto/informacion-tecnica-proyecto.component';
import { MetodologiaProyectoComponent } from './pages/metodologia-proyecto/metodologia-proyecto.component';
import { PersonalExternoContratarComponent } from './pages/personal-externo-contratar/personal-externo-contratar.component';
import { PersonalExternoCooperanteComponent } from './pages/personal-externo-cooperante/personal-externo-cooperante.component';
import { PersonalInternoComponent } from './pages/personal-interno/personal-interno.component';
import { ResumenPresupuestoComponent } from './pages/resumen-presupuesto/resumen-presupuesto.component';

const routes: Routes = [
  { path: 'info', component: InformacionGeneralComponent },
  { path: 'personal-interno', component: PersonalInternoComponent },
  { path: 'personal-externo-cooperante', component: PersonalExternoCooperanteComponent },
  { path: 'personal-externo-contratar', component: PersonalExternoContratarComponent },
  { path: 'metodologia-proyecto', component: MetodologiaProyectoComponent },
  { path: 'informacion-tecnica-proyecto', component: InformacionTecnicaProyectoComponent },
  { path: 'resumen-presupuesto', component: ResumenPresupuestoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
