import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';
import { IPlayer } from '../interfaces/IPlayer';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly ROOT_URL = 'http://localhost:8080/v1/';

  constructor(private http: HttpClient) {}

  callPlayer(id: number) {
    return this.http.get(`${this.ROOT_URL}Player/${id}`).pipe(
      tap((player) => console.log(player)),
      catchError(this.handleError)
    );
  }

  private handleError() {
    return of(null);
  }
}
