const SUPABASE_URL = "https://jhjalbwcxragugkolqju.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_d8qh7FYr-m6DuddcN3WpTw_50cyK9av";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
