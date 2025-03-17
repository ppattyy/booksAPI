import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://nuoqcrrrmhmusyzsokku.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51b3FjcnJybWhtdXN5enNva2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNjY1MjgsImV4cCI6MjA1Nzc0MjUyOH0.DvFQAw40sweaujoxxPijK_vB_YR4sqiVYUYmvTuBxQw'
const supabase = createClient(supabaseUrl, supabaseKey)

async function loadBooks() {
  let { data: books } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
    let bookTable = document.getElementById('books');
    bookTable.innerHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.ISBN}</td>
      </tr>`;
  }
}

document.addEventListener('DOMContentLoaded', loadBooks)