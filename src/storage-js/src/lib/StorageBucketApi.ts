// import { _fetch, _fetch, _fetch, _fetch } from './fetch'
import { Bucket } from './types'
let _fetch = require('wefetch')

export class StorageBucketApi {
  protected url: string
  protected headers: { [key: string]: string }

  constructor(url: string, headers: { [key: string]: string } = {}) {
    this.url = url
    this.headers = headers
  }

  /**
   * Retrieves the details of all Storage buckets within an existing product.
   */
  async listBuckets(): Promise<{ data: Bucket[] | null; error: Error | null }> {
    try {
      const data = await _fetch(`${this.url}/bucket`, { header: this.headers, method: 'GET' })
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  async getBucket(id: string): Promise<{ data: Bucket | null; error: Error | null }> {
    try {
      const data = await _fetch(`${this.url}/bucket/${id}`, { header: this.headers, method: 'GET' })
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @returns newly created bucket id
   */
  async createBucket(
    id: string,
    options: { public: boolean } = { public: false }
  ): Promise<{ data: string | null; error: Error | null }> {
    try {
      const body = { id, name: id, public: options.public }
      const data = await _fetch(`${this.url}/bucket`, {
        header: this.headers,
        method: 'POST',
        data: body,
      })
      return { data: data.name, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  /**
   * Updates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   */
  async updateBucket(
    id: string,
    options: { public: boolean }
  ): Promise<{ data: { message: string } | null; error: Error | null }> {
    try {
      const body = { id, name: id, public: options.public }
      const data = await _fetch(`${this.url}/bucket/${id}`, {
        header: this.headers,
        method: 'PUT',
        data: body,
      })
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  async emptyBucket(
    id: string
  ): Promise<{ data: { message: string } | null; error: Error | null }> {
    try {
      const data = await _fetch(`${this.url}/bucket/${id}/empty`, {
        header: this.headers,
        method: 'POST',
        data: {},
      })
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  async deleteBucket(
    id: string
  ): Promise<{ data: { message: string } | null; error: Error | null }> {
    try {
      const data = await _fetch(`${this.url}/bucket/${id}`, {
        header: this.headers,
        method: 'DELETE',
        data: {},
      })
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}
