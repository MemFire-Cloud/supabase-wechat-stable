import SupabaseClient from './SupabaseClient'
import { SupabaseClientOptions, SupabaseRealtimePayload } from './lib/types'
import { User as AuthUser, Session as AuthSession } from './gotrue-js/src/index'
export * from './gotrue-js/src/index'
export {
  PostgrestResponse,
  PostgrestSingleResponse,
  PostgrestMaybeSingleResponse,
  PostgrestError,
} from './postgrest-js/src/index'

/**
 * Creates a new Supabase Client.
 */
const createClient = (
  supabaseUrl: string,
  supabaseKey: string,
  options?: SupabaseClientOptions
) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options)
}

export {
  createClient,
  SupabaseClient,
  SupabaseClientOptions,
  SupabaseRealtimePayload,
  AuthUser,
  AuthSession,
}
