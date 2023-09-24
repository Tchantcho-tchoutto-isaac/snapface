import { Component, OnInit ,Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face_snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';
import { SingleFaceSnapComponent } from '../single-face-snap/single-face-snap.component';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input( ) faceSnap!:FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService, private router:Router) {}

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
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.butontext ="oops";
      
    }  
  }

 
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}

// ...

