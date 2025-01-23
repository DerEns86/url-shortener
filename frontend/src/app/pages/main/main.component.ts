import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);

  private http: HttpClient = inject(HttpClient);

  urls: { sourceUrl: string | null; targetUrl: string | null }[] = [];

  submitForm = this.fb.group({
    sourceUrl: [''],
    targetUrl: [''],
  });

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/url').subscribe({
      next: (response) => console.log(response),
    });
  }

  onSubmit() {
    const HOSTER = 'https://ens.dev';
    this.submitForm.patchValue({
      targetUrl: HOSTER + '/' + this.generateUuid(),
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
