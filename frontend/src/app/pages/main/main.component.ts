import { Component, effect, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  public showToast: boolean = false;

  public urlService: UrlService = inject(UrlService);
  public urls: UrlInterface[] = [];
  // private HOSTER: string = 'https://ens.dev';
  private HOSTER: string = 'https://localhost:4200';

  submitForm = this.fb.group({
    sourceUrl: [
      '',
      [
        Validators.required,
        Validators.pattern('https?://.*') || Validators.pattern('http?://.*'),
      ],
    ],
    targetUrl: [''],
  });

  constructor() {
    this.urlService.fetchUrl();
    effect(() => {
      this.urls = this.urlService.urls();
    });
    effect(() => {
      this.submitForm.patchValue({
        targetUrl: this.urlService.shortUrlSignal(),
      });
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
      this.submitForm.markAsPristine();
      this.submitForm.markAsUntouched();

      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }

  closeToast() {
    this.showToast = false;
  }
}
