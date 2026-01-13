import { HttpsAgent } from 'agentkeepalive';
import { AxiosRequestConfig } from 'axios';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';
import { Api, ApiConfig } from './api';
import { HaileyApiClientConfig, HaileyApiClientOptions } from './interfaces';

// DNS cache to prevent ENOTFOUND and other such issues
const dnsCache = new CacheableLookup();
let dnsCacheInstalled = false;

// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
const httpsAgent = new HttpsAgent({
  maxSockets: 32,
  maxFreeSockets: 10,
  timeout: 30000,
  freeSocketTimeout: 4500,
  socketActiveTTL: 60000
});

export class HaileyApiClient {
  options: HaileyApiClientOptions;
  config: Omit<HaileyApiClientConfig, 'keepAliveAgent' | 'dnsCache'>;
  readonly api: HaileyApiClientInstance;

  constructor(options: HaileyApiClientOptions, config: HaileyApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || 'https://api.haileyhr.app';
    config.timeout = config.timeout || 120000;

    if (!options.accessToken) {
      throw new Error('Example error: Missing options.accessToken');
    }

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent;
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false });
        } else {
          config.httpsAgent = config.keepAliveAgent;
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent);
        dnsCacheInstalled = true;
      }
    }

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent;
    delete config.dnsCache;

    this.options = options;
    this.config = config;

    // Initialize Hailey Api Client Instance
    this.api = new HaileyApiClientInstance({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker
    });
    this.api.setSecurityData(options.accessToken);

    // Install axios error handler
    this.installErrorHandler();
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        error.message = `HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        throw error;
      }
    );
  }

  private async securityWorker(accessToken: string) {
    const axiosRequestConfig: AxiosRequestConfig = {};

    axiosRequestConfig.headers = {
      Authorization: `Bearer ${accessToken}`
    };

    return axiosRequestConfig;
  }
}

class HaileyApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config);
  }

  helpers = {};
}
