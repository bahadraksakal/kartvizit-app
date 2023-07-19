import { HttpClient } from '@angular/common/http';
import { Inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http:HttpClient,
    private router: Router
  ) { }
  createUser(user:User):Observable<any>{
    return this.http.post(this.apiUrl+'/auth/signup',user);
  }
  
  loginUser(user:User):Observable<any>{
    return this.http.post(this.apiUrl+'/auth/login',user);
  }
  logout(): void {
    // LocalStorage'dan token'ı silme
    localStorage.clear();
    // Login sayfasına yönlendirme
    this.router.navigate(['/auth/login']);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // !! ile boolean değere çeviriyoruz
  }
}
