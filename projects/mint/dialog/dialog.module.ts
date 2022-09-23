import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [DialogComponent],
})
export class MintDialogModule {}
