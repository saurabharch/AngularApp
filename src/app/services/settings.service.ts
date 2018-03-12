import { Injectable } from '@angular/core';
import { Settings} from '../models/Settings';
@Injectable()
export class SettingsService {
 settings: Settings = {
  allowRegistration: true,
  disableBalanceOnAdd: true,
  disableBalanaceOnEdit: true
 };
  constructor() { }
  getSettings(): Settings {
    return this.settings;
  }
}
