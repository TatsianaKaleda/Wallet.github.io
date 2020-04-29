# Wallet.github.io
1. Установить node 12.16.2
2. Клонировать проект из репозитория github по ссылке 
https://github.com/TatsianaKaleda/Wallet.github.io
3. Установить модули npm командой npm i из директории Wallet-app
4. Если возникает ошибка: 
ERROR in ngcc is already running at process with id 4456.ERROR in ngcc is already running at process with id 4456.
то надо: 
 delete the lockfile at C:/Users/yurag/Desktop/wallet/Wallet-app/node_modules/@angu
lar/compiler-cli/ngcc/__ngcc_lock_file_. delete the lockfile at C:/.../wallet/Wallet-app/node_modules/@angular/compiler-cli/ngcc/__ngcc_lock_file_.
5. Установить json-serverjson-server глобально командой 
json-serverjson-server
6. Запустить сервер командой json-server --watch db.json --port 3004 из  директории Wallet-app
7. Запустить фронт командой npm run start
https://github.com/TatsianaKaleda/Wallet.github.io
Сервер запускается на одном порту, фронт на другом
