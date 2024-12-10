# example-api-client

**ExampleApiClient** is a third party [Example API](https://example.com/docs/) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://example.com/openapi.json) provided by Example.

## Installation

Add to project's package.json:

```
npm install @rantalainen/example-api-client
```

### Import

```javascript
import { ExampleApiClient } from '@rantalainen/example-api-client';
```

## Setup client with options

In order to obtain an API key, please contact Example Support. An API key is needed to access all API functions.

```javascript
const example = new ExampleApiClient(
  {
    apiKey: 'api_key'
  },
  {
    baseURL: 'https://dev.example.com'
  }
);
```

Available methods can be found in the [API documentation](https://example.com/docs/).

## Resources

- Example: https://example.com/
- Example Developer Guide: https://example.com/docs/
