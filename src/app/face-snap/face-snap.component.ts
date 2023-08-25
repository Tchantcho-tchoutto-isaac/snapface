import { Component, OnInit ,Input } from '@angular/core';
import { FaceSnap } from '../models/face_snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input( ) faceSnap!:FaceSnap;


  butontext !:string;
  

  ngOnInit() {
    
    this.butontext ="oops";
   }

  /**
   * name
   */
  
  public snap(){
    if (this.butontext==='oops') {
      this.faceSnap.snaps++;
    this.butontext ="snaps";
      
    } else {
      this.faceSnap.snaps--;
      this.butontext ="oops";
      
    }

  }
}

// ...

