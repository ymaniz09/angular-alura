# Curso de Angular @ Alura

Cursos da [formação Angular](https://cursos.alura.com.br/formacao-angular), disponível na plataforma da Alura.

## Contents

## Angular parte 1: Fundamentos

- [X] Bem começado, metade feito
- [X] Criando o primeiro componente
- [X] Integração com Web API's
- [X] Single Page Applications e rotas
- [X] Novo componente, novos conceitos
- [X] Melhorando a experiência do usuário
- [X] Lapidando ainda mais nossa aplicação

## Angular parte 2: Autenticação, Forms e lazy loading

- [X] O componente para login
- [X] Autenticação e o papel do token
- [X] Usuário logado e proteção de rotas
- [X] Registro de novos usuários
- [X] Rotas filhas e lazy loading

## Angular parte 3: upload, build e novos componentes

- [X] Upload de fotos
- [X] Lapidando o upload
- [X] Detalhes da foto
- [X] Comentando fotos
- [X] Remoção de fotos e novos componentes
- [X] Componente de notificação
- [X] Curtindo fotos
- [ ] Diferenciando ambientes de deploy

## Project setup

## Installing Multiple Versions of Node.js Using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)

### On Linux, you can install the build-essential package by running the following

- `sudo apt update`
- `sudo apt install build-essential`

### To install or update nvm, you can use the install script using cURL

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

### Install Multiple Versions of Node.js

- `nvm install 8.16.0`

### The latest 8.16 patch:

- `nvm install 8.16`

### Switching between Versions

- `nvm use 8.16.0`

[more details](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/)

## Running the application

### This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Running the API server

### Ensure you're using the correct version of node

- Inside api_server folder run:
- `nvm use 8.16.0`

### You'll need to install all the project dependencies

- `npm install`

### Setup

- You need to extract the file `data.db.zip` in api_server folder

### API server

Run `npm run`. Navigate to `http://localhost:3000/flavio/photos`.

### Users already stored

- user: flavio password: 123
- user: almeida password: 123