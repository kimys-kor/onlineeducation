import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service"
import { DomSanitizer } from '@angular/platform-browser';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  selectedFile = null;
  signupForm: FormGroup;
  selec = 0;

  fileSelected?: Blob;
  // imageUrl?: string;
  imageSrc: any;
  basedata: string;

  constructor(private router: Router, private service:AuthService, private sant:DomSanitizer) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'enrolltype': new FormControl("", [Validators.required]),
      'schoolname': new FormControl("", ),
      'corpinfo': new FormControl("", ),
      'corpname': new FormControl("", ),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", [Validators.required,Validators.minLength(6),]),
      'name': new FormControl("", [Validators.required, Validators.minLength(2)]),
    });
  }

  onFileChange(files: FileList): void{
    this.fileSelected = files[0]
    // this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;
    
    const reader = new FileReader();
    reader.readAsDataURL(this.fileSelected);
    reader.onload = () => {
      this.imageSrc = reader.result;
      console.log()
    }
  }

  signup(){
    console.log('제출')
    if(this.signupForm.valid){
      this.signupForm.value.corpinfo = this.imageSrc;
      console.log(this.signupForm.value);
      console.log(typeof this.signupForm.value.corpinfo);
      try{
        this.service.createData(this.signupForm.value).subscribe((res)=>{
          console.log('res', res);
          this.signupForm.reset();
           this.router.navigate(["/"]);
        });
      } catch(error){
        console.log('에러',error)
      }
      
    }else{
      console.log('all field is required')
    }
  }
}