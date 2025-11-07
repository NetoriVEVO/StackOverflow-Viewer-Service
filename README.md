# 🔍 StackOverflow Viewer

<div align="center">

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

</div>

<div align="center">
  
**Приложение для поиска вопросов на StackOverflow с удобной таблицей результатов и просмотром профилей пользователей**

[🚀 Live Demo](https://hattoriultra.github.io/StackOverflow-Viewer-Service/) |
</div>

## ✨ Возможности

### 🔎 **Поиск вопросов**
- **Расширенный поиск** по StackOverflow API
- **Фильтрация** по тегам, дате, рейтингу
- **Автодополнение** поисковых запросов
- **История поиска** последних запросов

### 📊 **Таблица результатов**
- **Сортировка** по дате, рейтингу, количеству ответов
- **Пагинация** и бесконечная прокрутка
- **Быстрый просмотр** деталей вопроса
- **Экспорт результатов** в CSV/JSON

### 👤 **Профили пользователей**
- **Просмотр всех вопросов** конкретного пользователя
- **Статистика активности** (вопросы, ответы, репутация)
- **Список достижений** и бейджей
- **Графики активности** за все время

## 🛠 Технологии

- **Frontend:** React 18+, TypeScript
- **State Management:** Redux Toolkit, RTK Query
- **HTTP Client:** Axios с интерцепторами
- **Роутинг:** React Router
- **UI Components:** Material-UI / Ant Design
- **Стили:** CSS Modules
- **API:** StackExchange API 2.2
- **Сборка:** Vite

## 📦 Быстрый старт

### Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/HATTORIULTRA/StackOverflow-Viewer-Service.git
cd StackOverflow-Viewer-Service

# Установка зависимостей
npm install

# Запуск development сервера
npm run dev

# Сборка для продакшена
npm run build

# Превью собранной версии
npm run preview
