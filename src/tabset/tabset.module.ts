import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NGB_TABSET_DIRECTIVES} from './tabset';
import {NgbTabsetConfig} from './tabset-config';

export {NgbTabChangeEvent} from './tabset';
export {NgbTabsetConfig} from './tabset-config';

@NgModule({
  declarations: NGB_TABSET_DIRECTIVES,
  exports: NGB_TABSET_DIRECTIVES,
  imports: [CommonModule],
  providers: [NgbTabsetConfig]
})
export class NgbTabsetModule {
}
