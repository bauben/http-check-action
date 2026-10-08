# HTTP Check bauben

Fetches a specific website and checks whether the retrived text is equal to the expected outcome.

## Inputs

### `url`

**Required** The url you want to curl against.

### `expected`

**Required** The expected outcome you seek.

### `retries`

How often to retry fetching.

## Outputs

### `response`

The actual response of the fetch.