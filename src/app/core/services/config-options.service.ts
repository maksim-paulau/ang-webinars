import { Injectable } from '@angular/core';
import { ConfigOptions } from '../config-options';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configOptions: ConfigOptions = {};

  constructor() { }

  setOptions(options: ConfigOptions) {
    this.configOptions = options;
  }

  getOptions(): ConfigOptions {
    return this.configOptions;
  }
}