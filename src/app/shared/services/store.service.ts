import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private inforMovie = new BehaviorSubject([] as any);
  inforMovieUpdate = this.inforMovie.asObservable();


  constructor() { }

  shareInforMovie(infor: any) {
    this.inforMovie.next(infor);
  }

}

