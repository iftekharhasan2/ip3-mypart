/**
 * Local server — development and self-hosted production.
 *
 * It mounts the exact same Express app that Vercel deploys as a serverless
 * function, so there is no drift between environments. In development Vite runs
 * in middleware mode in front of it, giving one origin on
 * http://localhost:3000 — no CORS, no proxy. In production (`npm start`) the
 * built `dist/` is served statically instead.
 *
 * On Vercel neither branch runs: the static build is served by the CDN and
 * /api/* goes to api/index.js.
 */
import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import apiApp from './server/app.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const isProd = process.env.NODE_ENV === 'production';

const app = express();

// /api/* is handled by the production app; everything else falls through.
app.use(apiApp);

if (isProd) {
  const distPath = path.resolve(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    console.error('[IP3 Platform] dist/ is missing. Run `npm run build` first.');
    process.exit(1);
  }

  app.use(express.static(distPath, { maxAge: '1y', index: false }));

  app.use((req, res) => {
    const isAdmin = req.path === '/admin' || req.path.startsWith('/admin/');
    res.sendFile(path.join(distPath, isAdmin ? 'admin.html' : 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true, allowedHosts: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use(async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const isAdmin = url === '/admin' || url.startsWith('/admin?') || url.startsWith('/admin/');
      const template = fs.readFileSync(path.resolve(__dirname, isAdmin ? 'admin.html' : 'index.html'), 'utf-8');
      const html = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (err) {
      vite.ssrFixStacktrace(err);
      next(err);
    }
  });
}

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  [IP3 Platform] ready (${isProd ? 'production' : 'development'})`);
  console.log(`  ➜  Site:   http://localhost:${PORT}/`);
  console.log(`  ➜  Admin:  http://localhost:${PORT}/admin`);
  console.log(`  ➜  API:    http://localhost:${PORT}/api/health\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[IP3 Platform] Port ${PORT} is already in use. Try: PORT=3001 npm run dev\n`);
  } else {
    console.error('\n[IP3 Platform] Server error:', err);
  }
});
