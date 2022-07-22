import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';


export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  position: number;
  nombreDirectorProyecto: string;
  identificacionDirectorProyecto: number;
  telefonoDirectorProyecto: number;
  correoDirectorProyecto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, nombreDirectorProyecto: 'Hydrogen', identificacionDirectorProyecto: 12345678, telefonoDirectorProyecto: 123456780, correoDirectorProyecto: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class DatosGeneralesComponent {

  disableSelect = new FormControl(false);

  myControl = new FormControl('');


  informacionGeneralFormGroup = this._formBuilder.group({
    tituloCtrl: ['', Validators.required],
    facultadCtrl: ['', Validators.required],
    departamentoCtrl: ['', Validators.required],

    duracionSemanasCtrl: ['', Validators.required],

    nombreCtrl: ['', Validators.required],
    apellidoCtrl: ['', Validators.required],
  });

  options: string[] = ['One', 'Two', 'Three'];


  displayedColumns: string[] = ['position', 'nombreDirectorProyecto', 'identificacionDirectorProyecto', 'telefonoDirectorProyecto', 'correoDirectorProyecto'];
  dataSource = ELEMENT_DATA;

  constructor(private _formBuilder: FormBuilder) {
    console.log(
      this.getWeeksDiff(
        new Date('2022-01-01'), new Date('2022-06-24')
      )
    );
  }
  getWeeksDiff(startDate: any, endDate: any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;

    return Math.round(Math.abs(endDate - startDate) / msInWeek);
  }

}
