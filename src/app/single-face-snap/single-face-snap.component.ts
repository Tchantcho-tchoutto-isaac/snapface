import { Component,OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face_snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent  implements OnInit {

 faceSnap!: FaceSnap;
 butontext !:string;

 constructor(private faceSnapsService:FaceSnapsService,private route:ActivatedRoute){}
  
  
 ngOnInit() {
   
   this.butontext ="oops";
   const faceSnapsId= +this.route.snapshot.params['id'];
   this.faceSnap=this.faceSnapsService.getFaceSnapById(faceSnapsId);
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
