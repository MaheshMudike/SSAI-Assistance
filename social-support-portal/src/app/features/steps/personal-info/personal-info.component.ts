import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
 selector: 'app-personal-info',
 standalone: true,
 imports: [CommonModule, ReactiveFormsModule, TranslateModule],
 templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent {

 @Input({ required: true })
 form!: FormGroup;

}