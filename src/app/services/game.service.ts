import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { IPlayer } from '../interfaces/IPlayer';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly ROOT_URL = 'http://localhost:80/v1/';

  constructor(private http: HttpClient) {}

  callPlayer(id: number) :Observable<any> {
    return this.http.get(`${this.ROOT_URL}Player/${id}`).pipe(
      tap((player) => console.log(player)),
      catchError(this.handleError)
    );
  }

  getMatchResult(){
    return this.http.get(`${this.ROOT_URL}GameResult`)
  }

  deletePlayers(){
    return this.http.delete(`${this.ROOT_URL}Players`).pipe(
      tap(()=> console.log('entro'))
    );
  }

  private handleError() {
    return of(null);
  }
}
