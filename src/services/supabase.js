import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjtcwnobhhxkejctlhbv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdGN3bm9iaGh4a2VqY3RsaGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MjI5MjgsImV4cCI6MjA2MzM5ODkyOH0.7K0gn57KKcI_dZ2GitCtV-V6DpIVzkQ8ph450TwrV6E';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
