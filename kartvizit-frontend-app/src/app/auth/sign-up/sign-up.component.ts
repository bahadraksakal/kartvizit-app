import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public signupForm!:FormGroup;
  showSpinner: boolean=false;
  constructor(
    private snackbarService: SnackbarService,
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
  ){}
  ngOnInit(): void {
    //console.log(this.data);
    this.signupForm = this.fb.group({
      userName: ['',[Validators.required,Validators.maxLength(50)]],      
      userMail: ['',[Validators.required,Validators.email,Validators.maxLength(255)]],
      userPassword: ['',[Validators.required,Validators.maxLength(20)]],
    });
  }
  createUser():void{
    this.showSpinner=true;
    this.authService.createUser(this.signupForm.value).subscribe({
      next: (res:any)=>{    
        if(res?.status){
          this.getSuccess(res);
          this.signupForm.reset();
          this.router.navigate(['/auth/login']);
        }else{
          this.getError(res);
        }            
       },
      error:(err:any)=>{
        this.getError(err);
      }
    });        
  }
  getSuccess(res:any):void{
    this.snackbarService.createSnackbar('success',res.message,4000);
    this.showSpinner=false;
  }
  getError(err:any):void{
    this.snackbarService.createSnackbar('error',err.message,4000);
    this.showSpinner=false;
  }
  
}
