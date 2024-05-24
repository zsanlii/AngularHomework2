import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage',
  standalone: true,
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(errors?: ValidationErrors): string |null |undefined{
    if (!errors) {
      return '';
    }

    const errorKey = Object.keys(errors)[0];
    const errorMessage = this.getErrorMessages(errorKey, errors[errorKey]);
    return errorMessage;
  }

  private getErrorMessages(errorKey: string, errorValue: any): string {
    switch (errorKey) {
      case 'required':
        return 'Bu alan zorunludur.';
      case 'minlength':
        return `En az ${errorValue.requiredLength} karakter olmalıdır.`;
      case 'maxlength':
        return `En fazla ${errorValue.requiredLength} karakter olmalıdır.`;
      default:
        return '';
    }
  }
}