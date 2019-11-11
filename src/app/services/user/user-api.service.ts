import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/user/user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  url = 'assets/mock-data/mock-users.json';

  constructor(private http: HttpClient) { }

  getUsers$() {
    return this.http.get<IUser[]>(this.url).pipe(delay(2000));
  }
}
