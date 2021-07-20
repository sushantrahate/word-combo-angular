import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WordComboComponent } from './word-combo.component';

const routes: Routes = [{ path: '', component: WordComboComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordComboRoutingModule { }
