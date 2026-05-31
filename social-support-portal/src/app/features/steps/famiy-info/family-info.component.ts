import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
 selector: 'app-family-info',
 standalone: true,
 imports: [CommonModule, ReactiveFormsModule, TranslateModule],
 templateUrl: './family-info.component.html'
})
export class FamilyInfoComponent {

 @Input({ required: true })
 form!: FormGroup;

}