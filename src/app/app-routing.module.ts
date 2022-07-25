import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliografiaGeneralComponent } from './pages/bibliografia-general/bibliografia-general.component';
import { DatosGeneralesComponent } from './pages/datos-generales/datos-generales.component';
import { InformacionGeneralComponent } from './pages/informacion-general/informacion-general.component';
import { InformacionTecnicaProyectoComponent } from './pages/informacion-tecnica-proyecto/informacion-tecnica-proyecto.component';
import { MetodologiaProyectoComponent } from './pages/metodologia-proyecto/metodologia-proyecto.component';
import { ObservacionesGeneralComponent } from './pages/observaciones-general/observaciones-general.component';
import { PersonalExternoContratarComponent } from './pages/personal-externo-contratar/personal-externo-contratar.component';
import { PersonalExternoCooperanteComponent } from './pages/personal-externo-cooperante/personal-externo-cooperante.component';
import { PersonalInternoComponent } from './pages/personal-interno/personal-interno.component';
import { ResumenPresupuestoComponent } from './pages/resumen-presupuesto/resumen-presupuesto.component';
import { TransferenciaConocimientosGeneralComponent } from './pages/transferencia-conocimientos-general/transferencia-conocimientos-general.component';

const routes: Routes = [

  { path: '', component: InformacionGeneralComponent },
  { path: 'personal-interno', component: PersonalInternoComponent },
  { path: 'personal-externo-cooperante', component: PersonalExternoCooperanteComponent },
  { path: 'personal-externo-contratar', component: PersonalExternoContratarComponent },
  { path: 'metodologia-proyecto', component: MetodologiaProyectoComponent },
  { path: 'informacion-tecnica-proyecto', component: InformacionTecnicaProyectoComponent },
  { path: 'resumen-presupuesto', component: ResumenPresupuestoComponent },
  { path: 'datos-generales', component: DatosGeneralesComponent },
  { path: 'transferencia', component: TransferenciaConocimientosGeneralComponent },
  { path: 'bibliografia', component: BibliografiaGeneralComponent },
  { path: 'observaciones', component: ObservacionesGeneralComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
