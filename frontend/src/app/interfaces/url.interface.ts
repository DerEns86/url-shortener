export interface UrlInterface {
  originalUrl: string;
  userId: string;
  shortUrl: string;
  host: string;
  shortUrlPath: string;
  createdAt: Date;
  expirationTime: number;
  active: boolean;
  deletedAt: Date | null;
}
