# To start the development server, run the following command in your terminal:
# ./run_dev.sh

#!/usr/bin/env bash

source venv/Scripts/activate

python -m uvicorn app.main:app --reload --reload-dir app --host 127.0.0.1 --port 8000
