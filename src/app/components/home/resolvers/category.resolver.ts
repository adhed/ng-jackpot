
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { GamesService } from '@app/services';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryResolver implements Resolve<void> {
  constructor(
    private readonly gamesService: GamesService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<null> {
    const { categoryId } = route.params;

    this.gamesService.setCategory(categoryId);

    return of(null);
  }
}
