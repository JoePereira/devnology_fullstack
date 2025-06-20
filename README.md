# 🛍️ Devnology Fullstack

Este projeto fullstack foi desenvolvido com o objetivo de simular uma loja virtual completa, com funcionalidades de listagem de produtos, carrinho de compras, histórico de pedidos e integração entre web, backend e mobile.

## 🧩 Estrutura do Projeto

devnology_fullstack/

├── devnology_backend # API REST em NestJS

├── devnology_web # Frontend em React + Vite

├── devnology_app # Aplicativo mobile em Flutter

├── docker-compose.yml # Contêiner para backend + banco de dados


---

## 🚀 Como rodar o projeto

### 🐘 Pré-requisitos

- [Docker + Docker Compose](https://www.docker.com/)
- Node.js (para rodar o frontend localmente sem Docker, opcional)
- Flutter SDK (para rodar o app mobile, opcional)

---

### 📦 Backend (NestJS)

1. Acesse a pasta do projeto:

```bash
cd devnology_fullstack
```
2. Suba o backend + banco Postgres com:
   
```bash
docker compose up --build
```
### 🌐 Frontend (React + Vite)
http://localhost:5173

### 📱 Mobile (Flutter)

O app não está containerizado no Docker por limitações da plataforma. Para rodá-lo:

1. Acesse a pasta:

```bash
cd mobile
```
2. Execute:
   
```bash
flutter pub get
flutter emulators
flutter emulators --launch <emulator id>
flutter run
```
para garantir que voce iniciara o projeto no emulador use os comandos acima

### 🧠 Decisões Técnicas
- Monorepo com Docker Compose para facilitar o desenvolvimento integrado.

- NestJS como framework backend por sua robustez e integração nativa com TypeScript.

- React com Vite para o frontend, priorizando velocidade de desenvolvimento e hot reload eficiente.

- Flutter para o aplicativo mobile por sua capacidade de gerar apps nativos com performance e UI ricas.

- Banco de dados PostgreSQL containerizado no Docker para persistência.

- API RESTful padronizada para comunicação entre os sistemas.

- CORS configurado para permitir acesso entre frontend e backend durante desenvolvimento.

