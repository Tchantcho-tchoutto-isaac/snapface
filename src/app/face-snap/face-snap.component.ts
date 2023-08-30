import { Component, OnInit ,Input } from '@angular/core';
import { FaceSnap } from '../models/face_snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input( ) faceSnap!:FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService) {}

 butontext !:string;
  
  
  ngOnInit() {
    
    this.butontext ="oops";
   }

  /**
   * name
   */

  
  
  public snap(){
    if (this.butontext==='oops') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'oops');
    this.butontext ="snaps";
    
      
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snaps');
      this.butontext ="oops";
      
    }

  }
}

// ...

