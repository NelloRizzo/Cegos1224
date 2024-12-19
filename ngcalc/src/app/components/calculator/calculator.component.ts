import { Component } from '@angular/core';
import { Calculator, initialState } from '../../models/calculator.model';
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

  state: Calculator = initialState

  private editDisplay(c: string) {
    if (this.state.clearDisplay) this.state.display = ''
    this.state.display += c
    this.state.clearDisplay = false
  }
  
  handleClick(t: string) {
    this.editDisplay(t)
  }
}
