import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { UrlInterface } from '../interfaces/url.interface';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private http: HttpClient = inject(HttpClient);

  public urlSignal = signal<UrlInterface[]>([]);

  private readonly BASE_URL = 'http://localhost:8080';

  fetchUrl() {
    this.http.get<UrlInterface>(this.BASE_URL + '/api/url').subscribe({
      next: (response) => {
        this.urlSignal.set([...this.urlSignal(), response]);
        console.log('urlSignal', this.urlSignal());
      },
    });
  }

  saveUrl(originalUrl: string, hoster: string) {
    this.http
      .post<UrlInterface>(this.BASE_URL + '/api/url', { originalUrl, hoster })
      .subscribe({
        next: (response: UrlInterface) => {
          // this.urlSignal.set([...this.urlSignal(), response]);
          console.log('urlSignal', this.urlSignal());
        },
      });
  }
}
