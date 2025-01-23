import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UrlInterface } from '../../interfaces/url.interface';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);

  private urlService: UrlService = inject(UrlService);

  private HOSTER: string = 'https://ens.dev';

  // urls: { sourceUrl: string | null; targetUrl: string | null }[] = [];

  submitForm = this.fb.group({
    sourceUrl: [''],
    targetUrl: [''],
  });

  constructor() {
    this.urlService.fetchUrl();
  }

  ngOnInit(): void {
    // this.http.get<UrlInterface>('http://localhost:8080/api/url').subscribe({
    //   next: (response) => console.log(response),
    // });
    // this.urlService.fetchUrl();
    console.log('urlSignal', this.urlService.urlSignal());
  }

  onSubmit() {
    if (
      this.submitForm.value.sourceUrl !== null &&
      this.submitForm.value.sourceUrl !== undefined
    ) {
      this.urlService.saveUrl(this.submitForm.value.sourceUrl, this.HOSTER);
    }
  }

  generateUuid() {
    return Date.now().toString(36);
  }
}
