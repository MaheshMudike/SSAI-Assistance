import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';


import { MatButtonModule } from '@angular/material/button';
import { OpenAIService } from '../../../core/services/ai.service';
import { AiDialogComponent } from '../../../shared/components/ai-dialog/ai-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-situation-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, TranslateModule],
    templateUrl: './situation-info.component.html'
})
export class SituationInfoComponent {

    @Input() form!: FormGroup;

    constructor(
        private ai: OpenAIService,
        private dialog: MatDialog
    ) { }

    async generate(field: string) {

        const prompt = this.form.get(field)?.value ||
            'Write a professional financial hardship explanation';

        try {

            const result = await this.ai.generateText(prompt);

            const dialogRef = this.dialog.open(AiDialogComponent, {
                width: '600px',
                data: result
            });

            dialogRef.afterClosed().subscribe(res => {

                if (!res) return;

                if (res.action === 'accept') {
                    this.form.get(field)?.setValue(res.text);
                }

                if (res.action === 'discard') {
                    // do nothing
                }

            });

        } catch (error) {
           console.error('AI generation failed', error);
        }
    }
}