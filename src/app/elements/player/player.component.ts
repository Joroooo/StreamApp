import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
myFP = fluidPlayer(
    'video-id',	{
"layoutControls": {
"controlBar": {
  "autoHideTimeout": 3,
  "animated": true,
  "autoHide": true
},
"htmlOnPauseBlock": {
  "html": null,
  "height": "",
  "width": null
},
"autoPlay": true,
"mute": true,
"allowTheatre": false,
"playPauseAnimation": true,
"playbackRateEnabled": true,
"allowDownload": false,
"playButtonShowing": true,
"fillToContainer": false,
"posterImage": ""
},
"vastOptions": {
"adList": [],
"adCTAText": false,
"adCTATextPosition": ""
}
})
*/
}
