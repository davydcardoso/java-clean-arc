# 🏗️ Java Clean Arc

> Gerador automático de estrutura Clean Architecture para projetos Java

[![npm version](https://img.shields.io/npm/v/java-clean-arc.svg)](https://www.npmjs.com/package/java-clean-arc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Sobre

**Java Clean Arc** é uma ferramenta CLI que gera automaticamente a estrutura de pastas para projetos Java seguindo os princípios de Clean Architecture e Domain-Driven Design (DDD).

## ✨ Features

- 🚀 Geração rápida de estrutura modular
- 📦 Separação clara por camadas (Domain, Application, Infrastructure)
- 🎯 Suporte a múltiplos módulos
- 🔧 Pasta `shared` para código compartilhado
- 💡 Zero configuração necessária

## 🎯 Estrutura Gerada

```
src/main/java/com.empresa.projeto/
├── modules/
│   ├── accounts/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── exceptions/
│   │   ├── application/
│   │   │   ├── usecases/
│   │   │   └── dtos/
│   │   └── infrastructure/
│   │       ├── persistence/
│   │       └── http/
│   └── [outros módulos...]
│
└── shared/
    ├── domain/
    ├── application/
    ├── infrastructure/
    │   ├── config/
    │   ├── exception/
    │   └── security/
    └── utils/
```

## 🚀 Instalação

### Uso direto com npx (recomendado)

```bash
npx java-clean-arc
```

### Instalação global

```bash
npm install -g java-clean-arc
```

## 💻 Como Usar

1. **Navegue até a raiz do seu projeto Java:**

```bash
cd meu-projeto-java
```

2. **Execute o comando:**

```bash
npx java-clean-arc
```

3. **Responda as perguntas:**

```
Nome do pacote base: com.empresa.projeto
Módulos separados por vírgula: accounts,customers,payments
```

4. **Pronto! 🎉** Sua estrutura foi criada

## 📖 Exemplo

```bash
$ npx java-clean-arc

🏗️  Java Clean Architecture Generator

Nome do pacote base (ex: com.empresa.projeto): com.pay.charges_api
Módulos separados por vírgula (ex: account,customer,payment): accounts,payments

📁 Criando estrutura...

✓ src/main/java/com/pay/charges_api/modules/accounts/domain/entities
✓ src/main/java/com/pay/charges_api/modules/accounts/domain/repositories
✓ src/main/java/com/pay/charges_api/modules/accounts/domain/exceptions
✓ src/main/java/com/pay/charges_api/modules/accounts/application/usecases
✓ src/main/java/com/pay/charges_api/modules/accounts/application/dtos
✓ src/main/java/com/pay/charges_api/modules/accounts/infrastructure/persistence
✓ src/main/java/com/pay/charges_api/modules/accounts/infrastructure/http
...

✅ Estrutura criada com sucesso!
```

## 🏛️ Arquitetura

### Camadas

**Domain (Núcleo)**
- `entities/` - Entidades de domínio
- `repositories/` - Interfaces de repositórios
- `exceptions/` - Exceções de domínio

**Application (Casos de Uso)**
- `usecases/` - Lógica de aplicação
- `dtos/` - Objetos de transferência de dados

**Infrastructure (Detalhes)**
- `persistence/` - Implementações de repositórios
- `http/` - Controllers e APIs REST

**Shared (Compartilhado)**
- Código reutilizável entre módulos
- Configurações globais
- Utilitários

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

MIT © Davyd Cardoso

## 🔗 Links

- [NPM Package]([https://www.npmjs.com/package/java-clean-arc](https://www.npmjs.com/package/java-clean-arc))
- [GitHub Repository](https://github.com/davydcardoso/java-clean-arc)

---

<p align="center">
  Feito com ❤️ para a comunidade Java
</p>
