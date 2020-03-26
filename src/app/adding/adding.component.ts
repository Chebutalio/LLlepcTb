import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  form: FormGroup;
  // titleAlert: string = "Це поле обов'язкове";

  // constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      animalName: new FormControl('', Validators.minLength(3)),
      animalKind: new FormControl('', Validators.required),
      animalAge: new FormControl(''),
      animalSex: new FormControl(''),
      animalBreed: new FormControl('', Validators.minLength(3)),
      arrivalDate: new FormControl('', Validators.required),
      animalWeight: new FormControl(''),
      animalWool: new FormControl('', Validators.minLength(3)),
      animalColor: new FormControl('', Validators.minLength(3))
    })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      const formData = {...this.form.value}

      console.log('Form data: ', formData);
    }
  }

}
