import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent {
  cardForm!: FormGroup;
  showSpinner: boolean=false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Card, // modal açılırken gönderilen veriyi alır.
    private snackbarService: SnackbarService,
    private diaglogRef: MatDialogRef<CardModalComponent>, // bu koompente kullanılan dialogun(modal) referansını alır ve modal üzerinde işlem yapabiliriz.
    private fb: FormBuilder,
    private cardService:CardService
  ){}

  ngOnInit(): void {
    //console.log(this.data);
    this.cardForm = this.fb.group({
      name: [this.data?.name || '',Validators.maxLength(50)],
      title: [this.data?.title || '',[Validators.required,Validators.maxLength(255)]],
      phone: [this.data?.phone || '',[Validators.required,Validators.maxLength(20)]],
      email: [this.data?.email || '',[Validators.email,Validators.maxLength(255)]],
      address: [this.data?.address || '',Validators.maxLength(255)],
      token: [localStorage.getItem('token')],
    });
  }
  addCard():void{
    //console.log(this.cardForm.value);
    this.showSpinner=true;
    this.cardService.addCard(this.cardForm.value).subscribe({
      next: (res:any)=>{         
        this.getSuccess(res);
       },
      error:(err:any)=>{
        this.getError(err);
      }
    });    
  }
  updateCard():void{
    this.showSpinner=true;
      this.cardService.udpateCard(this.cardForm.value,this.data._id).subscribe({
        next: (res:any)=>{         
          this.getSuccess(res);
         },
        error:(err:any)=>{
          this.getError(err);
        }
      });
  }
  deleteCard():void{
    this.showSpinner=true;
    this.cardService.deleteCard(this.data._id)
      .subscribe({
        next: (res:any)=>{         
          this.getSuccess(res);
         },
        error:(err:any)=>{
          this.getError(err);
        }
      });
  }
  getSuccess(res:any):void{
    this.snackbarService.createSnackbar('success',res.message,4000);
    this.cardService.getCards();
    this.showSpinner=false;
    this.diaglogRef.close();
  }
  getError(err:any):void{
    this.snackbarService.createSnackbar('error',err.message,4000);
    this.showSpinner=false;
  }
}

// addCard():void{
//   //console.log(this.cardForm.value);
//   this.showSpinner=true;
//   this.cardService.addCard(this.cardForm.value).subscribe(
//     (res:any)=>{
//       if(res.status){
//         //this.diaglogRef.close(res.status);
//         this.getSuccess(res);
//       }else{
//         this._snackBar.open(res.message,'',{duration:4000});
//       }
//     }
//   );    
// }