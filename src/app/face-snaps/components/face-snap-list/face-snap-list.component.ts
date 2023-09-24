import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face_snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html', // Le chemin du modèle doit être relatif à l'emplacement du composant.
  styleUrls: ['./face-snap-list.component.scss'], // Le chemin des styles doit être relatif à l'emplacement du composant.
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps: FaceSnap[] = []; // Utilisez un tableau vide par défaut.
  faceSnaps$: Observable<FaceSnap[]> | undefined; // Initialisez à undefined.

  private faceSnapsSubscription: Subscription | undefined;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
    // Vous pouvez vous abonner à faceSnaps$ pour obtenir les données.
    this.faceSnapsSubscription = this.faceSnaps$.subscribe((data) => {
      this.faceSnaps = data;
    });
  }

  ngOnDestroy() {
    // Assurez-vous de vous désabonner lorsque le composant est détruit.
    if (this.faceSnapsSubscription) {
      this.faceSnapsSubscription.unsubscribe();
    }
  }
}
