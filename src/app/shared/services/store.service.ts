import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private inforMovie = new BehaviorSubject([] as any);
  inforMovieUpdate = this.inforMovie.asObservable();

  private checkListChange = new BehaviorSubject([] as any);
  checkListMovieChange = this.checkListChange.asObservable();

  private checkTabsSelected = new BehaviorSubject([] as any);
  tabsSelected = this.checkTabsSelected.asObservable();

  private infoUser = new BehaviorSubject([] as any);
  getInfoUser = this.infoUser.asObservable();

  constructor() { }

  shareCheckListMovieChange(check: boolean) {
    this.checkListChange.next(check);
  }

  shareInforMovie(infor: any) {
    this.inforMovie.next(infor);
  }

  shareTabSelected(checkTabs: boolean) {
    this.checkTabsSelected.next(checkTabs);
  }

  shareInfoUser(data: any) {
    this.infoUser.next(data);
  }
}

