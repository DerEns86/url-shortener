import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss',
})
export class RedirectComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  urlService: UrlService = inject(UrlService);

  ngOnInit(): void {
    const shortUrlPath =
      this.activatedRoute.snapshot.paramMap.get('shortUrlPath');
    if (shortUrlPath) {
      this.urlService.redirectToUrl(shortUrlPath).subscribe({
        next: (url: string) => {
          window.location.href = url;
        },
      });
    }
  }
}
