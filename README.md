# 🚀 NestJS Prisma API

> **Curso:** NestJS do Zero com TypeORM, Mongoose, Prisma e Swagger
> **Professor:** Jorge Aluizio Alves Souza
> **Plataforma:** Udemy

## 📋 Sobre o Projeto

Esta é uma aplicação de estudo desenvolvida com o framework NestJS, focada em demonstrar os principais recursos e boas práticas para criação de APIs robustas com Node.js.

### 🎯 Objetivos de Aprendizado

- **Conhecer os principais recursos do framework NestJS** para criação de aplicativos com o Node.js
- **Criar a documentação da API com Swagger (Open API)** para facilitar o desenvolvimento e testes
- **Integrar o Prisma ao NestJS** aplicado com o banco de dados PostgreSQL
- **Criar recursos para customização da manipulação de erros** com o NestJS

## 🏗️ Arquitetura da Aplicação

A aplicação segue uma arquitetura modular baseada no NestJS, com as seguintes características:

- **Arquitetura modular** com separação clara de responsabilidades
- **ORM Prisma** para gerenciamento do banco de dados
- **Validação de dados** com class-validator e class-transformer
- **Tratamento personalizado de erros** com interceptors globais
- **Documentação automática** com Swagger/OpenAPI
- **Testes unitários e e2e** com Jest

## 🗄️ Modelos de Dados

### User

- `id`: Identificador único (auto-incremento)
- `email`: Email único do usuário
- `name`: Nome do usuário
- `admin`: Flag de administrador (padrão: false)
- `createdAt`: Data de criação
- `posts`: Relacionamento com posts (1:N)

### Post

- `id`: Identificador único (auto-incremento)
- `published`: Status de publicação (padrão: false)
- `title`: Título do post (máximo 255 caracteres)
- `content`: Conteúdo do post (opcional)
- `createdAt`: Data de criação
- `updatedAt`: Data da última atualização
- `authorId`: ID do autor (relacionamento com User)

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd prisma-api
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   ```bash
   # Crie um arquivo .env na raiz do projeto
   DATABASE_URL="postgresql://postgres:docker@localhost:5432/prismaapi"
   PORT=3000
   ```

4. **Inicie o banco de dados com Docker e acesse o container**

   ```bash
   docker-compose up -d db
   ```

   ```bash
   docker-compose exec app bash
   ```

5. **Execute as migrações do Prisma**

   ```bash
   npx prisma migrate dev
   ```

6. **Gere o cliente Prisma**

   ```bash
   npx prisma generate
   ```

7. **Inicie a aplicação**

   ```bash
   # Desenvolvimento
   npm run start:dev

   # Produção
   npm run build
   npm run start:prod
   ```

8. **Acesse a aplicação**
   - **API:** http://localhost:3000
   - **Documentação Swagger:** http://localhost:3000/api

### 🐳 Executando com Docker Compose (Alternativo)

Para executar toda a aplicação com Docker:

```bash
docker-compose up -d
```

## 📚 Endpoints da API

### 👥 Usuários (`/users`)

| Método   | Endpoint     | Descrição                | Status de Sucesso |
| -------- | ------------ | ------------------------ | ----------------- |
| `POST`   | `/users`     | Criar novo usuário       | 201 Created       |
| `GET`    | `/users`     | Listar todos os usuários | 200 OK            |
| `GET`    | `/users/:id` | Buscar usuário por ID    | 200 OK            |
| `PATCH`  | `/users/:id` | Atualizar usuário        | 200 OK            |
| `DELETE` | `/users/:id` | Remover usuário          | 200 OK            |

### 📝 Posts (`/posts`)

| Método   | Endpoint     | Descrição             | Status de Sucesso |
| -------- | ------------ | --------------------- | ----------------- |
| `POST`   | `/posts`     | Criar novo post       | 201 Created       |
| `GET`    | `/posts`     | Listar todos os posts | 200 OK            |
| `GET`    | `/posts/:id` | Buscar post por ID    | 200 OK            |
| `PATCH`  | `/posts/:id` | Atualizar post        | 200 OK            |
| `DELETE` | `/posts/:id` | Remover post          | 200 OK            |

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev          # Inicia em modo desenvolvimento com hot-reload
npm run start:debug        # Inicia em modo debug

# Produção
npm run build              # Compila o projeto
npm run start:prod        # Inicia em modo produção

# Testes
npm run test              # Executa testes unitários
npm run test:watch        # Executa testes em modo watch
npm run test:e2e          # Executa testes end-to-end
npm run test:cov          # Executa testes com cobertura

# Qualidade de código
npm run lint              # Executa ESLint
npm run format            # Formata código com Prettier
```

## 🛠️ Tecnologias Utilizadas

- **Framework:** NestJS 11
- **ORM:** Prisma 6
- **Banco de Dados:** PostgreSQL
- **Validação:** class-validator, class-transformer
- **Documentação:** Swagger/OpenAPI
- **Testes:** Jest
- **Linting:** ESLint + Prettier
- **Containerização:** Docker + Docker Compose

## 📖 Recursos de Tratamento de Erros

A aplicação implementa um sistema robusto de tratamento de erros com interceptors globais:

- **ConflictInterceptor:** Trata conflitos de dados (ex: email duplicado)
- **DatabaseInterceptor:** Trata erros de banco de dados
- **NotFoundInterceptor:** Trata recursos não encontrados
- **UnauthorizedInterceptor:** Trata erros de autorização

## 🧪 Testando a API

### Com Swagger UI

1. Acesse http://localhost:3000/api
2. Explore os endpoints disponíveis
3. Execute requisições diretamente na interface

### Com cURL

```bash
# Criar usuário
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@email.com"}'

# Listar usuários
curl http://localhost:3000/users

# Criar post
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "Meu primeiro post", "content": "Conteúdo do post"}'
```

## 📁 Estrutura do Projeto

```
src/
├── common/                 # Código compartilhado
│   ├── errors/            # Tratamento de erros
│   │   ├── interceptors/  # Interceptors globais
│   │   ├── types/         # Tipos de erro
│   │   └── utils/         # Utilitários
│   └── filters/           # Filtros de exceção
├── users/                 # Módulo de usuários
│   ├── dto/               # Data Transfer Objects
│   ├── entities/          # Entidades
│   ├── repositories/      # Repositórios
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── posts/                 # Módulo de posts
│   ├── dto/               # Data Transfer Objects
│   ├── entities/          # Entidades
│   ├── repositories/      # Repositórios
│   ├── posts.controller.ts
│   ├── posts.service.ts
│   └── posts.module.ts
├── prisma/                # Serviço Prisma
├── app.module.ts          # Módulo principal
└── main.ts               # Arquivo de entrada
```

## 🤝 Contribuindo

Este é um projeto de estudo, mas sugestões e melhorias são sempre bem-vindas!

## 📄 Licença

Este projeto é para fins educacionais.

---

**Desenvolvido com ❤️ para o curso NestJS do Zero com TypeORM, Mongoose, Prisma e Swagger**
