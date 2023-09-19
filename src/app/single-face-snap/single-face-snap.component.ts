import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../core/services/face-snaps.service';
import { FaceSnap } from '../core/models/face_snap.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oops'; // Initialisez buttonText avec la valeur initiale

    const faceSnapsId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapsId);
  }

  
  public snap(faceSnapId:number) {
    if (this.buttonText === 'Oops') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'oops');
      this.buttonText = 'unsnap';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oops';
    }
  }
  
}
