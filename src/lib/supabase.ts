import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://olyodvnjpgyjyuvgonap.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9seW9kdm5qcGd5anl1dmdvbmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyOTE1NDAsImV4cCI6MjA1MDg2NzU0MH0.DxM92BAy11K1BwtoOIG_izeMJHEGtwKH9u7HE6VylLg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);