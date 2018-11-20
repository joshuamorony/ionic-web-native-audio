import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Tabs } from '@ionic/angular';
import { AudioService } from '../services/audio.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit {

  @ViewChild(Tabs) tabs: Tabs;

  constructor(private audio: AudioService){

  }

  ngAfterViewInit(){

    this.audio.preload('tabSwitch', 'assets/audio/clickSound.mp3');

    this.tabs.ionChange.pipe(skip(1)).subscribe((ev) => {

        this.audio.play('tabSwitch');

    });

  }


}
