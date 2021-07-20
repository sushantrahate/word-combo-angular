import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordComboRoutingModule } from './word-combo-routing.module';

import { WordComboComponent } from './word-combo.component';



@NgModule({
  declarations: [WordComboComponent],
  imports: [
    CommonModule,
    WordComboRoutingModule
  ]
})
export class WordComboModule { }
