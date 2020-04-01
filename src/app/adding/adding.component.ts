import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  form: FormGroup;
  imageError: string;
  isImageSaved: boolean;
  imageBase64: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      animalPhoto: new FormControl(''),
      animalName: new FormControl('', Validators.minLength(3)),
      animalKind: new FormControl('', Validators.required),
      animalAge: new FormControl(''),
      animalGender: new FormControl(''),
      animalBreed: new FormControl('', Validators.minLength(3)),
      arrivalDate: new FormControl('', Validators.required),
      animalWeight: new FormControl(''),
      animalWool: new FormControl('', Validators.minLength(3)),
      animalColor: new FormControl('', Validators.minLength(3))
    })
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = '';
    if (fileInput.target.files && fileInput.target.files[0]) {
      const maxSize = 20971520;
      if (fileInput.target.files[0].size > maxSize) {
        this.imageError = 'Максимальний рзмір файлу ' + maxSize / 1000 + 'Мб';
        return false;
      }
      const reader = new FileReader() ;
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        const imgBase64Path = e.target.result;
        this.imageBase64 = imgBase64Path;
        this.isImageSaved = true;
        // console.log(this.imageBase64);
      }
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      console.log('Form data: ', formData);

      this.form.reset();
      this.isImageSaved = false;
    }
  }

}
