import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private fb: FormBuilder = inject(FormBuilder);
  urls: { sourceUrl: string | null; targetUrl: string | null }[] = [];

  submitForm = this.fb.group({
    sourceUrl: [''],
    targetUrl: [''],
  });

  onSubmit() {
    const hoster = 'https://ens.dev';
    this.submitForm.patchValue({
      targetUrl: hoster + '/' + this.generateUuid(),
    });
    console.log(this.submitForm.value);
    this.urls.push({
      sourceUrl: this.submitForm.value.sourceUrl || null,
      targetUrl: this.submitForm.value.targetUrl || null,
    });
    console.log('urls', this.urls);
    this.submitForm.patchValue({ sourceUrl: '' });
  }

  generateUuid() {
    return Date.now().toString(36);
  }
}
