import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rlteekexwhfywvuqvovk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdGVla2V4d2hmeXd2dXF2b3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNTU3OTYsImV4cCI6MjA0MDgzMTc5Nn0.oFTQr73kNL4eEG23E6J_tfyjB0mOee2-Jah6nODwCJ0'

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;