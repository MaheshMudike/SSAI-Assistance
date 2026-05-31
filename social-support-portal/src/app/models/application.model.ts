export interface ApplicationForm {

    name: string;
    nationalId: string;
    dob: string;
    gender: string;
    address: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    email: string;

    maritalStatus: string;
    dependents: number;
    employmentStatus: string;
    monthlyIncome: number;
    housingStatus: string;

    financialSituation: string;
    employmentCircumstances: string;
    reasonForApplying: string;
}