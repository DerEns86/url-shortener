export interface UrlInterface {
  originalUrl: string;
  shortUrl: string;
  host: string;
  shortUrlPath: string;
  createdAt: Date;
  expirationTime: number;
  active: boolean;
  deletedAt: Date | null;
}
