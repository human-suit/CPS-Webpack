Pages = https://human-suit.github.io/CPS-Webpack/
![image](https://github.com/user-attachments/assets/7524bb37-05ce-4414-9455-1c98029a1c2e)
![image](https://github.com/user-attachments/assets/c2d9410f-7d43-4b26-a54f-4c382595ad42)
![image](https://github.com/user-attachments/assets/6e882720-9320-49fc-9e3a-3b76bb5b4d29)
![image](https://github.com/user-attachments/assets/87c34f8c-8294-4d5e-86b7-36f756152849)
![image](https://github.com/user-attachments/assets/6defb013-6386-457a-a7dc-7cfc6f4958dd)


# Webpack Static Site Starter Kit

## Требования к проекту

- [Node 14.18.3](https://nodejs.org/download/release/v14.18.3/)
- [NVM/MacOC](https://tecadmin.net/install-nvm-macos-with-homebrew/)
- [NVM/Windows](https://github.com/coreybutler/nvm-windows/releases) Если Windows то установка только от имени администратора
- [Yarn](https://yarnpkg.com/)

---

## Использование

Клонировать репозиторий

```bash
git clone https://github.com/alex-karo/webpack-static-template block7
```

В папке block7 перейти в папку проекта

```bash
cd block7
```

Удалить папку .git

```bash
rm -rf .git
```

---

## Если создаете новый проект в github.com

нужно будет инициализировать git проект, _если данная команда не сработает значит версия git установлена старая, нужно обновить её_

```properties
git init -b main
```

добавить все изменения и сделать первый коммит

```properties
git add . && git commit -m "initial commit"
```

соединить git удаленный с локальным, *USER* (пользователь) и *REPO* (репозиторий)

```properties
git remote add origin https://github.com/USER/REPO.git
```

проверить на то что есть соединение

```properties
git remote -v
```

отправить изменения в удаленный репозиторий

```properties
git push origin main
```

---

## Проверка версии ноды

Должно вывести версию ноды 14.18.3

```properties
node -v
```

---

## Два метода установки зависимостей

Установка зависимостей через NPM

```properties
npm install
```

Установка зависимостей через Yarn

```properties
yarn
```

---

## Два метода запуска приложения

Для запуска веб-сервера через NPM

```properties
npm run start
```

Для запуска веб-сервера через Yarn

```properties
yarn start
```

---

## Два метода загрузки на Github Pages

### Ваш репозиторий должен быть связан с github.com репозиторием, после этого выполняем

Загрузка на Github Pages через NPM

```properties
npm run deploy
```

Загрузка на Github Pages через Yarn

```properties
yarn deploy
```

Основано на [этой статье](https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e)# CPS-Webpack
