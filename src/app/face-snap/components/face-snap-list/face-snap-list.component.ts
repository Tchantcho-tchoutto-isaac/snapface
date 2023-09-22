import { Component,OnDestroy,OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face_snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { interval } from 'rxjs';
import { tap,Observable} from 'rxjs';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>
  constructor(private faceSnapsService: FaceSnapsService){}
  
  ngOnInit() {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }


  
}
