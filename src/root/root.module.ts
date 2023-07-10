import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class RootModule {}
