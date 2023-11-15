# Projeto de Loteria

Este projeto é uma aplicação web para jogos de loteria, incluindo tipos de jogos como Sena e Quina. Utiliza Vue.js 3 com Typescript e integra várias tecnologias e práticas de desenvolvimento web modernas.

## Tecnologias Utilizadas

- **Vue.js 3 com Typescript**: Um framework progressivo para construir interfaces de usuário.
- **Vuex**: Para gerenciamento de estado.
- **Vue Router**: Para roteamento e navegação.
- **Vue Transitions e Animations**: Para adicionar interatividade visual.
- **Vitest**: Para testes unitários.
- **Cypress**: Para testes funcionais.
- **Docker**: Para containerização do projeto.
- **Bootstrap 5 e Sass**: Para estilização.
- **Eslint e Prettier**: Para garantir a consistência do código.
- **GitHub Actions**: Para integração contínua e entrega contínua (CI/CD).

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `/src/components/` - Contém todos os componentes reutilizáveis.
  - `/common/` - Componentes comuns, como botões e navbar.
  - `/lottery/` - Componentes específicos para jogos de loteria.
- `/src/views/` - Views específicas para cada página.
- `/src/router/` - Configurações do Vue Router.
- `/src/store/` - Configurações do Vuex para gerenciamento de estado.
- `/tests/` - Testes unitários e funcionais.
- `Dockerfile` e `docker-compose.yml` - Para configuração do Docker.

## Instalação e Configuração

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados. O Docker é opcional, mas recomendado para ambientes de desenvolvimento padronizados.

### Passos para Instalação

1. Clone o repositório:
git clone git@github.com:alissonvieeira/vue-lotto-simulator.git

2. Instale as dependências: 
cd vue-lotto-simulator

3. Execute o projeto localmente:
npm run dev

### Docker (Opcional)

Para rodar o projeto em um container Docker:

1. Desenvolvimento:
docker-compose up dev
Porta: localhost:3000

2. Produção
docker-compose up prod
Porta: localhost:80