import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuiEmptyStateModule } from '@sui/components';
import { <%= classify(name) %>ErrorComponent } from './error-<%= dasherize(name) %>.component';

@NgModule({
  imports: [CommonModule, SuiEmptyStateModule],
  declarations: [<%= classify(name) %>ErrorComponent],
  exports: [<%= classify(name) %>ErrorComponent],
})
export class <%= classify(name) %>ErrorComponentModule {}
