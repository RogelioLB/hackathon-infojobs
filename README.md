# Hackaton Infojobs 2023
#### Proyecto para hackaton de infojobs de midudev.

[![](https://img.shields.io/badge/-Demo-lightgreen?style=for-the-badge&theme=dark)](https://hackathon-infojobs.vercel.app/)

## Idea 💡
Nunca eh utilizado alguna plataforma como este tipo para buscar empleo, pero intente pensar como alguien que en verdad necesita encontrar trabajo y no sabe que tan capacitado esta para la oferta. Entonces se me ocurrio la idea de talvez en base a tus habilidades y conocimientos que tengas en tu CV dentro de infojobs te evalue para saber si podrías encajar con la oferta de trabajo. Esta evaluación la realice con la API de Open AI.

## Roadmap 📆
- [x] Autenticación con OAuth2
- [x] Integración con OpeanAI
- [x] Evaluación de la oferta en base a conocimientos
- [x] Manejo de errores
- [x] Tipar componentes
- [x] Infinite Scroll
- [x] Filtros
- [x] Evaluación de la oferta en base a experiecía previa
- [x] Mejorar UI

## Techstack 🚀
Nextjs
Typescript

## Apis ⚡
Infojobs
OpenAI

## Install ⚙️
- Clona el repositorio.
```
git clone https://github.com/KleyberJMH/infojobs-hackaton
```
- Instala dependencias.
```
npm install
```
- Crea las variables de entorno ".env.local"
```
INFOJOBS_TOKEN = Tu token
API_URL = https://api.infojobs.net/api
CLIENT_ID = Client id de tu app de infojobs
CLIENT_SECRET = Client secret de tu app de infojobs
REDIRECT_URI = http://www.infojobs.net/core/oauth2vc/index.xhtml
OPENAI_API_KEY = Tu api key de open ai
NEXT_PUBLIC_API_BASE = "http://localhost:3000/"
```
- Ejecuta servidor en modo desarrollo
```
npm run dev
```
