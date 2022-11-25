import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const reg = new RegExp(`^[^@]{3,}@[a-z]{3,}\.(${domainString})$`);
    return (control) => {
        return (control.value === '' || reg.test(control.value)) ? null : { emailValidator: true };
    }

}