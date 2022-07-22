import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatStepLabel } from '@angular/material/stepper';
import { MatStep } from '@angular/material/stepper';
// import { MatLabelModule } from '@angular/material/label';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionGeneralComponent } from './pages/informacion-general/informacion-general.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonalInternoComponent } from './pages/personal-interno/personal-interno.component';
import { PersonalExternoCooperanteComponent } from './pages/personal-externo-cooperante/personal-externo-cooperante.component';
import { PersonalExternoContratarComponent } from './pages/personal-externo-contratar/personal-externo-contratar.component';
import { InformacionTecnicaProyectoComponent } from './pages/informacion-tecnica-proyecto/informacion-tecnica-proyecto.component';
import { MetodologiaProyectoComponent } from './pages/metodologia-proyecto/metodologia-proyecto.component';
import { ResumenPresupuestoComponent } from './pages/resumen-presupuesto/resumen-presupuesto.component';
import { CronogramaEspAComponent } from './pages/cronograma-esp-a/cronograma-esp-a.component';
import { CronogramaEspBComponent } from './pages/cronograma-esp-b/cronograma-esp-b.component';
import { CronogramaEspCComponent } from './pages/cronograma-esp-c/cronograma-esp-c.component';
import { CronogramaEspDComponent } from './pages/cronograma-esp-d/cronograma-esp-d.component';
import { CronogramaEspEComponent } from './pages/cronograma-esp-e/cronograma-esp-e.component';
import { TextFieldModule } from '@angular/cdk/text-field';

import { MatGridListModule } from '@angular/material/grid-list';
import { AreasConocimientoComponent } from './pages/areas-conocimiento/areas-conocimiento.component';
import { DatosGeneralesComponent } from './pages/datos-generales/datos-generales.component';
import { DatosInformativosInvestigacionComponent } from './pages/datos-informativos-investigacion/datos-informativos-investigacion.component';
//import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    AppComponent,
    InformacionGeneralComponent,
    PersonalInternoComponent,
    PersonalExternoCooperanteComponent,
    PersonalExternoContratarComponent,
    InformacionTecnicaProyectoComponent,
    MetodologiaProyectoComponent,
    ResumenPresupuestoComponent,
    CronogramaEspAComponent,
    CronogramaEspBComponent,
    CronogramaEspCComponent,
    CronogramaEspDComponent,
    CronogramaEspEComponent,
    AreasConocimientoComponent,
    DatosGeneralesComponent,
    DatosInformativosInvestigacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    // MatNativeDateModule,
    MatMomentDateModule,
    MatTableModule,
    MatTabsModule,
    //MatMomentDateModule,
    TextFieldModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
