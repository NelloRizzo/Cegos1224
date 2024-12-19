import { Component } from '@angular/core';

import { DisplayComponent } from '../display/display.component';
import { ButtonComponent } from '../button/button.component';
import { OperatorComponent } from '../operator/operator.component';

@Component({
  selector: 'app-calculator',
  imports: [DisplayComponent, ButtonComponent, OperatorComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  
}
