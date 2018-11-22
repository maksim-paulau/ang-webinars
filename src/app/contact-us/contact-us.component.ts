import { Component, OnInit, Inject, Optional } from '@angular/core';
import { LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService } from '../core/services';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Inject(ConstantsService) private constantsService: any,
    @Inject(GeneratorService) private generator: any
  ) { }

  ngOnInit() {
    console.log (this.localStorageService);
    console.log (this.configOptionsService);
    console.log (this.constantsService);
    console.log (this.generator);
  }
}
