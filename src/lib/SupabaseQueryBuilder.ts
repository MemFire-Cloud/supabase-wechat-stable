import { PostgrestQueryBuilder } from '../postgrest-js/src/index'

export class SupabaseQueryBuilder<T> extends PostgrestQueryBuilder<T> {
  constructor(
    url: string,
    {
      headers = {},
      schema,
      table,
    }: {
      headers?: { [key: string]: string }
      schema: string
      table: string
    }
  ) {
    super(url, { headers, schema })
  }
}
