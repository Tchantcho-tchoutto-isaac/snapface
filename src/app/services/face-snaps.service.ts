import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face_snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable,map,switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) { }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  
    snapFaceSnapById(faceSnapId: number, snapType: 'oops' | 'unsnap'): Observable<FaceSnap> {
      return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
              ...faceSnap,
              snaps: faceSnap.snaps + (snapType === 'oops' ? 1 : -1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
              `http://localhost:3000/facesnaps/${faceSnapId}`,
              updatedFaceSnap)
          )
      );
  }
  

  addFaceSnap(formValue: {
    title: string,
    description: string,
    imageUrl: string,
    location?: string
  }): Observable<FaceSnap> {
    // Vous devez également effectuer une requête HTTP POST pour ajouter une nouvelle FaceSnap au serveur.
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: 0 // Assurez-vous d'obtenir l'ID approprié du serveur après avoir ajouté la FaceSnap.
    };

    // Faites une requête HTTP POST au lieu de la ligne suivante, pour ajouter la nouvelle FaceSnap au serveur.
    // this.faceSnaps.push(faceSnap);

    // Vous devriez renvoyer l'observable résultant de la requête POST au composant appelant.
    return this.http.post<FaceSnap>('http://localhost:3000/facesnaps', faceSnap);
  }
}
