# Hair Day 💇

Um aplicativo web moderno para gerenciar agendamentos e serviços de um salão de beleza. Desenvolvido com React, TypeScript e Vite.

## 📋 Sobre o Projeto

Hair Day é uma aplicação intuitiva e responsiva que permite:

- 📅 **Gerenciar agendamentos** de clientes
- 🕐 **Selecionar horários e períodos** disponíveis
- 👤 **Registrar informações dos clientes** (nome, data e hora do atendimento)
- 📔 **Manter um diário** de serviços realizados
- 💾 **Persistir dados** localmente no navegador

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server rápido
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento entre páginas
- **React DatePicker** - Seletor de datas
- **date-fns** - Manipulação de datas
- **ESLint** - Linting e qualidade de código

## 📦 Requisitos

- **Node.js** 16+ 
- **pnpm** (ou npm/yarn)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/hair-day.git
cd hair-day
```

2. Instale as dependências:
```bash
pnpm install
```

## 🏃 Como Executar

### Desenvolvimento
Inicia o servidor de desenvolvimento com HMR (Hot Module Replacement):
```bash
pnpm dev
```
A aplicação estará disponível em `http://localhost:5173`

### Build para Produção
```bash
pnpm build
```

### Preview da Build
```bash
pnpm preview
```

### Linting
Verifica e corrige problemas de código:
```bash
pnpm lint
```

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Ícones e imagens
├── components/          # Componentes reutilizáveis
│   ├── button.tsx
│   ├── input-text.tsx
│   ├── card.tsx
│   └── ...
├── constants/           # Constantes da aplicação
├── core/                # Componentes principais
│   ├── diary.tsx        # Diário de serviços
│   ├── service.tsx      # Formulário de agendamento
│   ├── schedule-list.tsx # Lista de agendamentos
│   └── ...
├── helpers/             # Funções auxiliares
├── hooks/               # Custom React hooks
│   ├── use-entry.ts     # Hook para gerenciar entradas
│   └── use-schedule.ts  # Hook para gerenciar horários
├── models/              # Tipos e interfaces TypeScript
├── pages/               # Páginas da aplicação
│   ├── page-home.tsx    # Página principal
│   └── page-components.tsx
├── App.tsx              # Componente raiz
└── main.tsx             # Ponto de entrada
```

## 🎯 Funcionalidades Principais

### 1. Agendamento de Serviços
- Seleção de data com calendário interativo
- Escolha de período (manhã, tarde, noite)
- Seleção de horários disponíveis
- Registro de dados do cliente

### 2. Gerenciamento de Horários
- Visualização de horários por período
- Marcação de horários disponíveis/indisponíveis
- Atualização dinâmica da agenda

### 3. Diário de Serviços
- Registro de todas as entradas de clientes
- Informações completas de cada atendimento
- Armazenamento local dos dados

## 💾 Armazenamento de Dados

Os dados são persistidos no **localStorage** do navegador, permitindo que as informações sejam mantidas entre sessões.

## 🎨 Estilo

O projeto utiliza **Tailwind CSS** para estilização, oferecendo um design consistente e responsivo.

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento |
| `pnpm build` | Cria build otimizado para produção |
| `pnpm preview` | Visualiza a build de produção |
| `pnpm lint` | Executa verificação de linting |

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.
