import { Injectable } from "@angular/core"
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DataService {
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  constructor() { }
  // Service message commands
  announceMission(message: string) {
    this.missionAnnouncedSource.next(message);
  }
}