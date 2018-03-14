import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Settings } from '../../models/Settings';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private settingsServices: SettingsService
  ) { }

  ngOnInit() {
    this.settings = this.settingsServices.getSettings();
  }

  onSubmit () {
    this.settingsServices.changeSettings(this.settings);
    this.flashMessage.show('Settings Saved' , {
      cssClass: 'alert-success' , timeout: 4000
    });
  }


}
