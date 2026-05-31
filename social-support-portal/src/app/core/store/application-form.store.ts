import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApplicationStore {

    private applicationSignal =
        signal<any>({});

    // Read data
    applicationData =
        this.applicationSignal.asReadonly();

    // Save/update form data
    update(data: any) {

        this.applicationSignal.update(
            current => ({
                ...current,
                ...data
            })
        );
    }

    // Get current data
    getData() {
        return this.applicationSignal();
    }

    // Reset
    clear() {
        this.applicationSignal.set({});
    }
}