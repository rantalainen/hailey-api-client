# hailey-api-client

**HaileyApiClient** is a third party [Hailey API](https://api.haileyhr.app/docs/) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://api.haileyhr.app/docs/v1/docs.json) provided by Hailey.

## Installation

Add to project's package.json:

```
npm install @rantalainen/hailey-api-client
```

### Import

```javascript
import { HaileyApiClient } from '@rantalainen/hailey-api-client';
```

## Setup client with options

In order to obtain an API key, please contact Hailey Support. An API key is needed to access all API functions.

```javascript
const hailey = new HaileyApiClient(
  {
    accessToken: 'accessToken'
  },
  {
    baseURL: 'https://api.demo.haileyhr.app/'
  }
);

const response = await hailey.api.employees.employeesList();
```

Available methods can be found in the [API documentation](https://api.haileyhr.app/docs/).

## Resources

- Hailey HR: https://haileyhr.com/
- Hailey HR API Guide: https://docs.haileyhr.com/
- Hailey HR Integration Docs: https://docs.haileyhr.com/integrations/
