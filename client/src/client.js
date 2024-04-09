import { createClient } from '@supabase/supabase-js';

const URL = 'https://gtzarxjjcojpdaryfeiy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0emFyeGpqY29qcGRhcnlmZWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NDQ2NTYsImV4cCI6MjAyODIyMDY1Nn0.C6QNB-zHHlcqY0VeDM1p2yL0cfgVJJ2sZzAw8tWfIR4'

export const supabase = createClient(URL, API_KEY);

