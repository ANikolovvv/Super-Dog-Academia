import { FormGroup, ValidatorFn } from "@angular/forms";

export function passwordValidator(password: string, rePass: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const pass1 = group.get(password);
        const pass2 = group.get(rePass)

        return pass1?.value === pass2?.value ? null : { passwordValidator: true };
    }
}