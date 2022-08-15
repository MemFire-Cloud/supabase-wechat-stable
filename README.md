# `supabase-wechat-stable`

An isomorphic Javascript client for Supabase.

- Documentation: https://supabase.io/docs/client/supabase-client

## Usage

```sh
npm install supabase-wechat-stable
```

```js
import { createClient } from 'supabase-wechat-stable'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
```

### UMD

You can now use plain `<script>`s to import supabase-js from CDNs, like

`<script src="https://cdn.jsdelivr.net/npm/supabase-wechat-stable"></script>`
