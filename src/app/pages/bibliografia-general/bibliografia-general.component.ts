import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bibliografia-general',
  templateUrl: './bibliografia-general.component.html',
  styleUrls: ['./bibliografia-general.component.scss']
})
export class BibliografiaGeneralComponent implements OnInit {

  bibliografiaFormGroup = this._formBuilder.group({
    bibliografiaCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
