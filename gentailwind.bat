@echo off
call npm update
call npx tailwindcss -i ./css/tailwind-source.css -o ./css/styles.css --minify