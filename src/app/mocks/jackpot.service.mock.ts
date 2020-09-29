import { JackpotValue } from '@app/models/jackpot';
import { BehaviorSubject } from 'rxjs';

export class JackpotServiceMock {
  public jackpots$: BehaviorSubject<JackpotValue[]> = new BehaviorSubject([]);
  updateJackpots(): void {}
}
