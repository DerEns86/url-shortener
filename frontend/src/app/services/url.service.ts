import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { UrlInterface } from '../interfaces/url.interface';
import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private http: HttpClient = inject(HttpClient);
  private storageService: StorageService = inject(StorageService);

  private urlSignal = signal<UrlInterface[]>([]);

  public shortUrlSignal = signal<string>('');

  readonly urls = this.urlSignal.asReadonly();

  private readonly BASE_URL = environment.BASE_URL;

  fetchUrl() {
    this.http.get<UrlInterface[]>(this.BASE_URL + '/api/url').subscribe({
      next: (response: UrlInterface[]) => {
        this.urlSignal.set(response);
        console.log('urlSignal', this.urlSignal());
      },
    });
  }

  fetchUrlByUser(userId: string) {
    this.http
      .get<UrlInterface[]>(this.BASE_URL + '/api/url/user/' + userId)
      .subscribe({
        next: (response: UrlInterface[]) => {
          this.urlSignal.set(response);
          console.log('urlSignal', this.urlSignal());
        },
      });
  }

  saveUrl(originalUrl: string, host: string) {
    let userId = this.storageService.userSignal();
    this.http
      .post<UrlInterface>(this.BASE_URL + '/api/url', {
        originalUrl,
        host,
        userId,
      })
      .subscribe({
        next: (response: UrlInterface) => {
          this.urlSignal.update((urls) => [...urls, response]);
          this.shortUrlSignal.set(response.shortUrl);
        },
      });
  }

  redirectToUrl(shortUrlPath: string) {
    return this.http.get(this.BASE_URL + '/api/url/' + shortUrlPath, {
      responseType: 'text',
    });
  }
}
