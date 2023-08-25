import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face_snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  mysnap!:FaceSnap
  myfirstsnap!:FaceSnap

  ngOnInit(): void {
       this.mysnap=new FaceSnap(
        'isaac',
        'Mon meuilleur amiee depuis tous petit',
        'data:image/jpeg;base64,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'
        ,new Date(),
        0);
        this.myfirstsnap=new FaceSnap(
          'geoges',
          'Mon  amie depuis tous petit',
          'data:image/jpeg;base64,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'
          ,new Date(),
          0);
  }
}
