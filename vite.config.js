import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      index: "index.html",
      contact: "contact.html",
      task: "task.html",
      counter: "counter.html",
      note: "note.html",
      profile: "profile.html",
      timer: "timer.html",
      guestbook: "guestbook.html",
      product: "product.html",
    },
  },
});
