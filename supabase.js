import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hpaxaxgjfnsougdszxnx.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYXhheGdqZm5zb3VnZHN6eG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjUxODYsImV4cCI6MjA2NTY0MTE4Nn0.aoKcqa9MWCwPJu4Oq0oyrKdmSMUh0xlKzms-mtjgVGw';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
