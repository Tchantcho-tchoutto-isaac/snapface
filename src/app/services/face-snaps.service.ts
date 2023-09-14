import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face_snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  
  
  constructor (private http:HttpClient){}
  
    faceSnaps: FaceSnap[] = [
          
        
        ];
      
    getAllFaceSnaps(): Observable<FaceSnap[]>  {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'oops' | 'snaps'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snaps' ? faceSnap.snaps++ : faceSnap.snaps--;
}
  
}