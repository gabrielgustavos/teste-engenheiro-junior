# Challenge Engenheiro full stack Junior

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instalação

Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/gabrielgustavos/teste-engenheiro-junior.git
```

2. O projeto está dividido em dois diretórios:

## FRONT END

```bash
cd react-app
```

## BACK END

```bash
cd api_praqt
```

4. Migrations

```bash
docker-compose exec app php artisan migrate --seed
```

5. Rodar aplicação:

```bash
npm run dev (FRONT END)
php artisan serve (BACK END)
```

## Pendências

- CRUD de Pedidos de Compra
- Implementar um CRUD de pedidos de compra, com as seguintes características:

- Cada pedido deve ter um status (Em Aberto, Pago ou Cancelado).
- Permitir listar, criar, atualizar e excluir pedidos de compra.
- Autenticação de Usuário
- Implementar autenticação de usuário na aplicação para controlar o acesso às funcionalidades.

- Aplicação de Desconto
- Implementar a aplicação de desconto em alguns pedidos de compra, conforme necessário.
