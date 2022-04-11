import { FormItemComponent } from './../form-item/form-item.component';
import { BaseItemComponent } from './../components/base-item/base-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from 'src/app/components/text-field/text-field.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


const components =[
  TextFieldComponent,
  BaseItemComponent,
  FormItemComponent,

]


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[components]
})
export class SharedModule { }
