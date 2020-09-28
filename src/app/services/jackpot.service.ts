import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '@app/constants';
import { JackpotValue } from '@app/models/jackpot';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  public jackpots$: BehaviorSubject<JackpotValue[]> = new BehaviorSubject([]);

  constructor(private readonly httpClient: HttpClient) {}

  updateJackpots(): void {
    this.httpClient.get(`${API_URL}jackpots.php`)
      .pipe(
        tap((jackpots) => this.jackpots$.next(jackpots as JackpotValue[]))
      )
      .subscribe();
  }
}
