# 🚀 Guía de Deployment - www.benjainvest.pt

## Opción 1: Vercel (Recomendado - Más Fácil)

### 📋 Pre-requisitos
- Cuenta en [GitHub](https://github.com)
- Cuenta en [Vercel](https://vercel.com)
- Dominio benjainvest.pt configurado

### 1️⃣ Subir Código a GitHub

```bash
# Inicializar Git (si no lo has hecho)
cd /Users/juanortiz/Desktop/benjainvest-last
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit - Benjainvest website"

# Crear repositorio en GitHub y conectarlo
# Ve a github.com → New Repository → "benjainvest"
# Luego ejecuta:
git remote add origin https://github.com/TU_USUARIO/benjainvest.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deployment en Vercel

1. **Conectar GitHub a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub "benjainvest"

2. **Configurar el Proyecto:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables de Entorno:**
   - Click en "Environment Variables"
   - Agrega: `RESEND_API_KEY` = `tu_api_key_de_resend`
   - Click "Deploy"

### 3️⃣ Configurar Dominio Personalizado

1. **En Vercel:**
   - Ve a tu proyecto → Settings → Domains
   - Agrega: `www.benjainvest.pt` y `benjainvest.pt`

2. **En tu Proveedor de Dominio:**
   
   Agrega estos registros DNS:
   
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21
   
   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

3. **Espera 24-48 horas** para propagación DNS (normalmente solo 1-2 horas)

---

## Opción 2: Netlify (Alternativa)

### 1️⃣ Deploy en Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Iniciar deployment
netlify init

# Configuración:
# - Build command: npm run build
# - Publish directory: dist
# - Functions directory: api
```

### 2️⃣ Variables de Entorno en Netlify

```bash
netlify env:set RESEND_API_KEY "tu_api_key"
```

### 3️⃣ Configurar Dominio

- Ve a Netlify Dashboard → Domain settings
- Agrega dominio personalizado: `benjainvest.pt`
- Sigue las instrucciones DNS

---

## Opción 3: VPS Manual (Avanzado)

Si prefieres control total (DigitalOcean, AWS, etc.):

### 1️⃣ Servidor Setup

```bash
# En tu VPS (Ubuntu/Debian)
sudo apt update
sudo apt install nodejs npm nginx

# Clonar repositorio
git clone https://github.com/TU_USUARIO/benjainvest.git
cd benjainvest

# Instalar dependencias
npm install

# Build
npm run build
```

### 2️⃣ PM2 para Backend

```bash
# Instalar PM2
npm install -g pm2

# Iniciar servidor
pm2 start server.js --name benjainvest-api
pm2 startup
pm2 save
```

### 3️⃣ Nginx Config

```nginx
server {
    listen 80;
    server_name benjainvest.pt www.benjainvest.pt;
    
    root /var/www/benjainvest/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4️⃣ SSL con Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d benjainvest.pt -d www.benjainvest.pt
```

---

## ✅ Checklist Pre-Deployment

- [ ] `.env` está en `.gitignore` ✅
- [ ] Todas las API keys están en variables de entorno
- [ ] `npm run build` funciona sin errores
- [ ] Dominio adquirido y listo para configurar
- [ ] Email de Resend configurado (cambiar de `onboarding@resend.dev`)

---

## 🔧 Troubleshooting

### Error: "Failed to send email"
- Verifica que `RESEND_API_KEY` esté configurada
- Verifica el dominio del email en Resend

### Error 404 en /api/send-email
- Vercel: Asegúrate que `/api` folder existe
- Revisa logs en Vercel Dashboard

### Dominio no funciona
- Espera propagación DNS (24-48h)
- Verifica registros con: `nslookup benjainvest.pt`

---

## 📞 Soporte

Si tienes problemas:
1. Vercel Dashboard → View Function Logs
2. GitHub Actions (si configuraste CI/CD)
3. Documentación: [vercel.com/docs](https://vercel.com/docs)

---

## 🎉 ¡Listo!

Tu sitio estará disponible en:
- **https://benjainvest.pt**
- **https://www.benjainvest.pt**

**Tiempo estimado:** 15-30 minutos ⏱️

