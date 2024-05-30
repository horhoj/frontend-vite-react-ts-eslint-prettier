# Туду лист с бесконечной вложенностью списков туду. С тестами и полноценной эмуляцией слоя АПИ

# Используется: 

vite, react, typescript, redux-tookit, docker(docker-compose), nginx (для раздачи статики билда), eslint + prettier

# запуск

npm i

npm run dev

# тесты

npm run test

# запуск в докере (протестировано только на линукс, нужны make, docker, docker-compose)

запуск в режиме разработки (порт 3000)

make docker-ddev

запуск в режиме раздачи билда через nginx (порт 80)

make docker-init


разумеется порты можно поменять в настройках
