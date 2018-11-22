import { Injectable } from '@angular/core';
import { ConfigOptions } from '../config-options';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configOptions: ConfigOptions = new ConfigOptions(1, 'testLogin', 'testEmail@test.test');

  constructor() { }

  setOptions(options: ConfigOptions) {
    this.configOptions = options;
  }

  getOptions(): ConfigOptions {
    return this.configOptions;
  }
}
