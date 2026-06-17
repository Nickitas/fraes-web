# Litora Website


Официальный сайт проекта [Litora](https://github.com/Nickitas/litora-cli) — CLI-утилита для геоморфологического моделирования береговых систем, анализа фрактальных свойств береговой линии и физически обоснованного моделирования эрозионных процессов.

## Установка

```bash
# Установка зависимостей
pnpm install

# Или с помощью npm
npm install

# Или с помощью yarn
yarn install
```

## Разработка

```bash
# Запуск dev-сервера
pnpm dev

# Сервер будет доступен на http://localhost:5173
```

## Сборка

```bash
# Production сборка
pnpm build

# Предпросмотр сборки
pnpm preview
```

## Линтинг и форматирование

```bash
# Проверка TypeScript
pnpm typecheck

# ESLint
pnpm lint

# Форматирование кода
pnpm format
```

Компоненты автоматически устанавливаются в `src/shared/shadcn/components/ui/`.

## Переменные окружения

Создайте файл `.env.local` для локальной конфигурации:

```env
VITE_API_URL=/api
```

## Авторизация

Демо-credentials для тестирования защищённых страниц:

- **Email:** `user@example.com`
- **Password:** `password`

Авторизация реализована с моковым API и хранится в `localStorage`.

## Защита скачивания

Страница `/downloads` защищена компонентом `DownloadGuard`:
- Неавторизованные пользователи перенаправляются на `/login`
- После успешного входа — редирект обратно на `/downloads`

## Лицензия

MIT

## Ссылки

- [Repository](https://github.com/Nickitas/litora-cli)
- [FSD Methodology](https://feature-sliced.design/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
