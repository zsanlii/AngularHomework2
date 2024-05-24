import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder, FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  
} from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { AddCategory } from '../../models/add-category';
import { FormControlErrorMessagePipe } from '../../pipes/formControlErrorMessage.pipe';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { AppButtonDirective } from '../../../../shared/directives/appButton.directive';
import { AppNoCharacterInputDirective } from '../../../../shared/directives/appNoCharacterInput.directive';
import { MultipleDirective } from '../../../../shared/directives/multiple.directive';

@Component({
  selector: 'app-add-category-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Basit girdiler almak için yardımcı olur.
    ReactiveFormsModule,
    FormControlErrorMessagePipe,
    TranslatePipe,
    AppButtonDirective ,
    AppNoCharacterInputDirective,
    MultipleDirective// Daha ayrıntılı form yapıları kurmamıza yardımcı olur.
  ],
  templateUrl: './add-category-form.component.html',
  styleUrl: './add-category-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryFormComponent {
  // FormsModule
  // nameInputValue = '';
  // descriptionInputValue = '';

  // ReactiveFormsModule
  formGroup: FormGroup;
formControl: any;
  // new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   description: new FormControl('', [Validators.required]),
  // });

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }


  addCategory() {
    const addCategory: AddCategory = {
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
    };
    this.categoriesService.add(addCategory).subscribe({
      complete: () => {
        console.log('Category added');
      },
    });
  }

  onFormSubmit() {
    if (this.formGroup.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.addCategory();
  }
}
