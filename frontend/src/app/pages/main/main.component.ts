import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, OnInit } from '@angular/core';
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

  public urlService: UrlService = inject(UrlService);
  public urls: UrlInterface[] = [];
  private HOSTER: string = 'https://ens.dev';

  submitForm = this.fb.group({
    sourceUrl: [''],
    targetUrl: [''],
  });

  constructor() {
    this.urlService.fetchUrl();
    effect(() => {
      this.urls = this.urlService.urls();
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.submitForm.value.sourceUrl !== null &&
      this.submitForm.value.sourceUrl !== undefined
    ) {
      this.urlService.saveUrl(this.submitForm.value.sourceUrl, this.HOSTER);
      this.submitForm.setValue({
        sourceUrl: '',
        targetUrl: this.urlService.shortUrlSignal(),
      });
    }
  }
}
