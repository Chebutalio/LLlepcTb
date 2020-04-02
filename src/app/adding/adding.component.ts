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
      name: new FormControl('', Validators.minLength(3)),
      kindOfAnimal: new FormControl('', Validators.required),
      age: new FormControl(''),
      sex: new FormControl(''),
      breed: new FormControl('', Validators.minLength(3)),
      dateOfEntry: new FormControl('', Validators.required),
      weight: new FormControl(''),
      wool: new FormControl('', Validators.minLength(3)),
      color: new FormControl('', Validators.minLength(3))
    });
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
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value};
      formData.image_data = this.imageBase64;
      // console.log('Form data: ', formData);
      // console.log(this.imageBase64);
      this.http.post('http://localhost:3000/pet', formData)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        )
      this.form.reset();
      this.isImageSaved = false;
    }
  }

}
