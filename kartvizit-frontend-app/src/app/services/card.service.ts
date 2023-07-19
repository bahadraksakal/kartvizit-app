import { HttpClient } from '@angular/common/http';
import { Inject,Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!:Card[];

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient
    ) { }

  getCards() :void{
    this.http.post<Card[]>(this.apiUrl+'/cards/get',{token:localStorage.getItem('token')})
    .subscribe((res:any)=>{
      //console.log(res);
      this.cards=res.data;
    });
  }
  addCard(card:Card):Observable<any>{
    return this.http.post(this.apiUrl+'/cards/add',card);
  }
  udpateCard(card:Card, cardId:string):Observable<any>{
    return this.http.put(this.apiUrl+'/cards/update/'+cardId,card);
  }
  deleteCard(cardId:string):Observable<any>{
    return this.http.post(this.apiUrl+'/cards/delete/'+cardId,{token:localStorage.getItem('token')});
  }
}
