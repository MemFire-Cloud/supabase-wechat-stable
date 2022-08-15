import { GoTrueClient } from '../gotrue-js/src/index'

export class SupabaseAuthClient extends GoTrueClient {
  constructor(options: {
    url?: string
    headers?: { [key: string]: string }
    detectSessionInUrl?: boolean
    autoRefreshToken?: boolean
    persistSession?: boolean
    localStorage?: Storage
  }) {
    super(options)
  }
}
