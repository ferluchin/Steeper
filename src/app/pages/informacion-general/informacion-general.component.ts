import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';







@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.scss']
})
export class InformacionGeneralComponent {

  informacionGeneralFormGroup = this._formBuilder.group({
    tituloCtrl: ['', Validators.required],
    facultadCtrl: ['', Validators.required],
    departamentoCtrl: ['', Validators.required],

    duracionSemanasCtrl: ['', Validators.required],

    nombreCtrl: ['', Validators.required],
    apellidoCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    actividadCientificaCtrl: ['', Validators.required],
    objetivoSocioeconomicoCtrl: ['', Validators.required],
    areaTematicaID: ['', Validators.required],

    objetivosPlanCreacionOportunidades: ['', Validators.required],

    campoAmplio: ['', Validators.required],
    campoEspecifico: ['', Validators.required],
    campoDetallado: ['', Validators.required],

    objetivosDesarrolloSostenible: ['', Validators.required],

    organismoEntidadFinanciador: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  vinculacionFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  innovacionDocenteFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  innovacionPrototiposFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });


  consolidadoGeneralFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  isLinear = false;



  constructor(private _formBuilder: FormBuilder) {

  }

}
