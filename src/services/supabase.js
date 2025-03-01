import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dfkvlboygwiqwxceyoye.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRma3ZsYm95Z3dpcXd4Y2V5b3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2NDcxOTcsImV4cCI6MjA1NjIyMzE5N30.x_KAZhzcDrqeo0Ci_foUFnZ9sXaPk0JqWQnRmR1KF8w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
