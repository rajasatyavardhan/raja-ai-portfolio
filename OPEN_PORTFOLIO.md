# How to open the portfolio

You have two options.

## Option 1: Open the static version

Double-click:

```text
portfolio.html
```

This does not need npm, Vite, or a server. It is the safest version if the React dev server shows a white screen.

## Option 2: Open the React/Vite version

Double-click:

```text
start-portfolio.bat
```

It will start the Vite dev server and open:

```text
http://127.0.0.1:5173/
```

Do not double-click `index.html`. Vite React apps should be opened through the dev server or deployed build.

## GitHub deployment note

This folder does not currently have a GitHub remote. To deploy on GitHub Pages, we need to either:

1. Push this project to a new GitHub repo, or
2. Replace/update your existing `My-Portfolio` repo.

Use Vercel for the easiest React deployment. Use `portfolio.html` for the simplest GitHub Pages deployment.
