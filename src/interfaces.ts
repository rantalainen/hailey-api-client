import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

export interface HaileyApiClientOptions {
  /** An API key is a token that you provide when making API calls */
  accessToken: string;
}

export interface HaileyApiClientConfig extends ApiConfig<any> {
  /**
   * API base url,
   * by default: `https://api.haileyhr.app/`.
   * Use `https://api.demo.haileyhr.app/` for testing.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}
