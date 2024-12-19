import { createAction, props } from "@ngrx/store";

// click su una cifra
// - devo comunicare al gestore dello stato quale cifra è stata premuta
// Es. digitClicked(7)
export const digitClicked = createAction('[Calculator] Digit Clicked', props<{ digit: number }>())
// click su virgola 
// devo comunicare semplicemente che è stata premuta la virgola
// Es. commaClicked()
export const commaClicked = createAction('[Calculator] Comma Clicked')
// click su operazione
// Es. operatorClicked('+')
export const operatorClicked = createAction("[Calculato] Operator Clicked", props<{ op: string }>())