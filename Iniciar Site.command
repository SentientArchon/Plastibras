#!/bin/bash
cd "$(dirname "$0")"
PORT=8080
echo "Iniciando servidor em http://localhost:$PORT"
open "http://localhost:$PORT"
python3 -m http.server $PORT
