import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-ai-dialog',
    standalone: true,

    imports: [
        CommonModule,
        FormsModule,

        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule
    ],

    templateUrl: './ai-dialog.component.html'
})
export class AiDialogComponent {

    text: string;

    constructor(
        private dialogRef: MatDialogRef<AiDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: string
    ) {
        this.text = data;
    }

    accept() {
        this.dialogRef.close({
            action: 'accept',
            text: this.text
        });
    }

    discard() {
        this.dialogRef.close();
    }
}