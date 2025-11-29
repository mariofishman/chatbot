# Backend (FastAPI)

## Overview

This directory contains the FastAPI backend for the Chatbot project.
It provides API routes, streaming SSE endpoints, LangGraph orchestration, and database persistence.

---

## Requirements

- Python **3.12**
- Git Bash (or another Bash-compatible shell)
- Virtual environment created in this folder: `venv/`

---

## Setup

### 1. Create and activate the virtual environment

From `chatbot/backend`:

```bash
py -3.12 -m venv venv
source venv/Scripts/activate
```

### 2. Install dependencies

Either install directly:

```bash
pip install fastapi uvicorn[standard] python-dotenv
```

Optionally export them to a `requirements.txt`:

```bash
pip freeze > requirements.txt
```

Later you can reinstall with:

```bash
pip install -r requirements.txt
```

---

## Development Server

### Run with hot reload (main dev workflow)

Assuming `run_dev.sh` exists in `chatbot/backend`:

```bash
./run_dev.sh
```

Typical contents of `run_dev.sh`:

```bash
#!/usr/bin/env bash
source venv/Scripts/activate
python -m uvicorn app.main:app \
  --reload \
  --reload-dir app \
  --host 127.0.0.1 \
  --port 8000
```

### Optional: Run without reload (more stable for long sessions)

If you create `run_dev_stable.sh`:

```bash
./run_dev_stable.sh
```

Example contents:

```bash
#!/usr/bin/env bash
source venv/Scripts/activate
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

The backend defaults to:

```text
http://127.0.0.1:8000
```

---

## API Endpoints

### Health check

```http
GET /health
```

Example response:

```json
{ "status": "ok" }
```

(Exact response may differ if you’ve customized it.)

---

## Environment Variables

Environment variables are loaded automatically by **pydantic-settings**

Example `.env` (see `.env.example` for a clean template):

```env
# OpenAI-compatible API key
OPENAI_API_KEY=your-api-key-here

# Database file or URL (SQLite by default)
DATABASE_URL=sqlite:///./app.db

# Allowed CORS origins (comma-separated OR JSON list)
# Both of these are valid:
# CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
# CORS_ORIGINS=["http://localhost:5173", "http://127.0.0.1:5173"]

# LLM configuration
LLM_MODEL=gpt-4o-mini
LLM_TEMPERATURE=0.0

# Debug mode (true/false)
DEBUG=true
```

---

## Project Structure

Current minimal structure:

```text
backend/
  app/
    __init__.py
    main.py
    routers/
      __init__.py
      health.py
    config/
      __init__.py
      settings.py
  venv/
    ...
```

- `app/main.py` – FastAPI app, CORS setup, router registration
- `app/routers/health.py` – `/health` endpoint
- `app/config/settings.py` – placeholder for future settings/env management

---

## Notes

- Use `source venv/Scripts/activate` in Git Bash before running any backend commands.
- Use `./run_dev.sh` during development for automatic reload on code changes.
- Future steps will add:

  - `/chat` SSE endpoint
  - `/summary` endpoint
  - LangGraph orchestration
  - SQLModel-based persistence (SQLite → Postgres-ready)
