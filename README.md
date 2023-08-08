# Личная сборка бойлерплэйта для новых проектов.

# Используется: 

vite, react, typescript, redux-tookit, docker(docker-compose), nginx (для раздачи статики билда), eslint + prettier

# запуск

npm i

npm run dev

# запуск в докере (протестировано только на линукс, нужны make, docker, docker-compose)

запуск в режиме разработки (порт 3000)

make ddev

запуск в режиме раздачи билда через nginx (порт 80)

make init


разумеется порты можно поменять в настройках
