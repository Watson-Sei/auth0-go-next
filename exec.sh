#!/bin/sh
export $(cat ./api/.env | grep -v ^# | xargs);
cd ./frontend && npm run dev & cd ./api && go run main.go & echo $AUTH0_DOMAIN
wait
echo "終了しました"