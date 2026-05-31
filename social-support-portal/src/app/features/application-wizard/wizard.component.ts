import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

import { StorageService } from '../../core/services/storage.service';
import { MockApiService } from '../../core/services/mock-api.service';
import { FamilyInfoComponent } from '../steps/famiy-info/family-info.component';
import { PersonalInfoComponent } from '../steps/personal-info/personal-info.component';
import { SituationInfoComponent } from '../steps/situation-info/situation-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ApplicationStore } from '../../core/store/application-form.store';

@Component({
    selector: 'app-wizard',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProgressBarComponent,
        PersonalInfoComponent,
        FamilyInfoComponent,
        SituationInfoComponent,
        MatButtonModule,
        MatCardModule
    ],
    templateUrl: './wizard.component.html'
})
export class WizardComponent {

    step = 1;

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private storage: StorageService,
        private api: MockApiService,
        private applicationStore: ApplicationStore
    ) {

        this.form = this.fb.group({

            // Step 1
            name: ['', Validators.required],
            nationalId: ['', Validators.required],
            dob: ['', Validators.required],
            gender: ['', Validators.required],
            address: [''],
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
            email: ['', [Validators.required, Validators.email]],

            // Step 2
            maritalStatus: [''],
            dependents: ['', Validators.required],
            employmentStatus: ['', Validators.required],
            monthlyIncome: ['',Validators.required],
            housingStatus: [''],

            // Step 3
            financialSituation: [''],
            employmentCircumstances: [''],
            reasonForApplying: ['']
        });

        const saved = this.storage.load();
        if (saved) this.form.patchValue(saved);

        this.form.valueChanges.subscribe(v => {
        this.storage.save(v);
        this.applicationStore.update(v);
        });

        const storeData =
        this.applicationStore.getData();
        if (Object.keys(storeData).length) {
        this.form.patchValue(storeData);
        }
    }

    next() {
        if (this.step === 1) {

            const step1Fields = [
                'name',
                'nationalId',
                'dob',
                'gender',
                'address',
                'city',
                'state',
                'country',
                'phone',
                'email'
            ];

            step1Fields.forEach(field => {
                this.form.get(field)?.markAsTouched();
            });

            if (!this.isStep1Valid()) {
                return;
            }
        }

        // STEP 2 VALIDATION
        if (this.step === 2) {

            const step2Fields = [
                'maritalStatus',
                'dependents',
                'employmentStatus',
                'monthlyIncome',
                'housingStatus'
            ];

            step2Fields.forEach(field => {
                this.form.get(field)?.markAsTouched();
            });

            if (!this.isStep2Valid()) {
                return;
            }
        }

        this.step++;
    }


    back() {
        if (this.step > 1) this.step--;
    }

    isStep1Valid() {

        return this.form.get('name')?.valid &&
            this.form.get('nationalId')?.valid &&
            this.form.get('dob')?.valid &&
            this.form.get('gender')?.valid &&
            this.form.get('address')?.valid &&
            this.form.get('city')?.valid &&
            this.form.get('state')?.valid &&
            this.form.get('country')?.valid &&
            this.form.get('phone')?.valid &&
            this.form.get('email')?.valid;
    }

    isStep2Valid() {

        return this.form.get('maritalStatus')?.valid &&
            this.form.get('dependents')?.valid &&
            this.form.get('employmentStatus')?.valid &&
            this.form.get('monthlyIncome')?.valid &&
            this.form.get('housingStatus')?.valid;
    }

    submit() {
        const payload = this.applicationStore.getData();
        this.api.submit(payload).subscribe((res: any) => {
            alert(res.message);
            this.storage.clear();
            this.applicationStore.clear();
            this.form.reset();
            this.step = 1;
        });
    }
}