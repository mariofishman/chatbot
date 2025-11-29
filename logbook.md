# Connective Logbook

## Intro

This logbook documents the end-to-end development of **Connective**, an intelligent networking assistant designed to capture, organize, and advance professional relationships through a conversational interface. The system blends React-based frontend UI with an SSE-driven assistant layer and a FastAPI backend, orchestrated via LangGraph and modularized across Contacts, Follow-Ups, and Goals. Its architecture is tailored for memory-rich interactions and strategic relationship tracking, supported by Tailwind v4, shadcn/ui, and Python-based services.

Each log entry captures the concrete progress made across frontend, backend, AI orchestration, and UI design systems, reflecting every decision, implementation milestone, and architectural shift. This record serves both as an engineering history and a design reference as the platform evolves toward full feature parity and deployment.

The project is grounded in atomic design principles and follows a tightly organized development sequence, blending interface engineering with assistant orchestration via LangGraph. All changes, adjustments to strategy, and implementation notes are recorded here to ensure continuity, collaboration, and maintainability across development phases. The logbook begins post-environment setup and continues through to deployment and polish.

## 📅 Log Entry: November 23, 2025

As of this entry, the first 12 steps of the Connective roadmap have been completed. The logbook begins here, retroactively summarizing progress but formally starting **after Step 12** (backend scaffolding and setup).

### Original Roadmap and Adjustments

The Connective project began with a clear 30-step roadmap outlining the sequential phases of frontend setup, chat UI, backend integration, assistant orchestration, and deployment. As development progressed, some steps were clarified, modified, or replaced to better fit emerging needs—such as removing Subframe, enhancing Tailwind v4 support, and adding retry handling.

### Original 30-Step Roadmap

1. Install and set up VSCode (extensions, settings, workspace basics)
2. Install and set up Cursor (AI-assisted coding)
3. Create repo and initialize Git workspace
4. Scaffold frontend with Vite + React + TypeScript
5. Install and configure Tailwind CSS (ensure v4)
6. Install and configure shadcn/ui with Tailwind v4 compatibility  
   6b. Set up shadcn MCP server for Cursor integration
7. Build global UI shell (header, container, chat layout)
8. Implement chat message components and input bar
9. Add SSE client hook (EventSource) with polling fallback
10. Draft custom widgets in Subframe and export React + Tailwind
11. Refactor Subframe exports into shadcn conventions
12. Scaffold FastAPI backend with Uvicorn and CORS enabled
13. Define Pydantic settings and environment management
14. Implement `/chat` SSE endpoint (token streaming)
15. Implement `/summary` endpoint (JSON request/response)
16. Wire LLM provider (OpenAI-compatible) and client in Python
17. Create LangChain/LangGraph “interview → summary” flow
18. Design SQLModel models (Session, Message, CompanyProfile, Summary)
19. Implement persistence services and CRUD functions
20. Stream-and-save messages during `/chat` interaction
21. Connect frontend API clients to backend endpoints
22. Add anonymous session handling and ID propagation
23. Configure local dev (Vite proxy, CORS, env vars)
24. Write minimal tests (Vitest/React Testing Library for frontend, Pytest for backend)
25. Deploy frontend to Vercel/Netlify
26. Deploy backend to Fly.io/Render
27. Set production config (CORS, HTTPS, SSE stability, env secrets)
28. Add observability (structured logs, request IDs, monitoring)
29. Polish UI/UX (styling, animations, responsive tweaks)  
    29b. [Added] Error-Recovery and Retry Handling
30. Security hardening (rate limits, input validation, error handling)

### Changes Made

- **Subframe removed**: Steps 10–11 now involve direct widget creation in Cursor using Tailwind and shadcn/ui.
- **Tailwind v4 support**: Explicit postcss patches and adjustments required.
- **SSE clarified**: Stream opens per message, not persistent.
- **New step 29b**: Retry logic and assistant error handling.

### Updated Roadmap (Post-Revisions)

This updated roadmap reflects all changes made during early implementation, incorporating removed tools, clarified setups, and added error-handling logic. It tracks sequential development across frontend, backend, assistant logic, and deployment.

1. **VSCode setup**
2. **Cursor setup**
3. **Git repo initialization**
4. **Scaffold frontend with Vite + React + TypeScript**
5. **Configure Tailwind CSS v4** (with `@tailwindcss/postcss` support)
6. **Install shadcn/ui** (Tailwind v4 compatible)  
   6b. **Set up shadcn MCP server** for Cursor CLI integration
7. **Build global UI shell** (header, layout, theming)
8. **Implement chat message system**
   - 8a. Message model + mock data
   - 8b. Message bubble component
   - 8c. Chat scroll + rendering
   - 8d. Input area (composer)
   - 8e. Centralized state
   - 8f. Local mock only
   - 8g. SSE scaffolding
9. **Add SSE streaming client logic**
   - 9a. EventSource utility
   - 9b. Message lifecycle tie-in
   - 9c. Token streaming to UI
   - 9d. Error handling
   - 9e. Stream cleanup
   - 9f. Mock streaming mode
10. **Draft custom widgets directly in Cursor** using shadcn and Tailwind
11. **Refactor widgets to shadcn/ui conventions** (componentized, theme-aligned)
12. **Scaffold FastAPI backend**

- 12.1. Create backend folder + virtual environment
- 12.2. Install FastAPI, Uvicorn, and dependencies
- 12.3. Set up main app + `/health` route
- 12.4. Configure CORS
- 12.5. Structure `app/`, `routers/`, `config/`
- 12.6. Add dev script
- 12.7. Verify with browser/Postman
- 12.8. Document run instructions in README

13. **Define Pydantic `BaseSettings`** config and `.env` loading
14. **Implement `/chat` SSE endpoint** for assistant messages
15. **Implement `/summary` endpoint** for structured data
16. **Wire LLM provider** (e.g., OpenAI-compatible)
17. **Build LangGraph agent** for interview-to-summary flow
18. **Design SQLModel data models** (`Session`, `Message`, `Contact`, `Goal`, etc.)
19. **Implement database services and persistence logic**
20. **Stream and save messages live during `/chat`**
21. **Connect frontend to backend endpoints** via fetch/SWR
22. **Handle anonymous sessions and session propagation**
23. **Configure full-stack local dev (proxy, CORS, .env)**
24. **Write frontend/backend unit tests**
25. **Deploy frontend (Vercel/Netlify)**
26. **Deploy backend (Fly.io/Render)**
27. **Set production config and CORS/security headers**
28. **Add logs, monitoring, and observability hooks**
29. **Polish UI (responsive layout, animation, UX polish)**

- 29b. **[New] Error-Recovery + Retry Handling**

30. **Harden security** (input validation, rate limiting, etc.)

## 📅 Log Entry: November 23, 2025

**Step 12 – Backend Scaffold Completed**

The FastAPI backend was successfully scaffolded, completing all subtasks under Step 12. This foundational backend setup enables future API development, assistant orchestration, and persistent data handling.

### ✅ What was accomplished:

1. Created the `backend/` project folder and initialized a virtual environment.
2. Installed core dependencies: **FastAPI**, **Uvicorn**, and supporting packages.
3. Set up the **main FastAPI app file** (`main.py`) with a working `GET /health` route.
4. Configured **CORS middleware** with allowed origins matching the frontend.
5. Defined a clean **project structure**, including `app/`, `routers/`, and `config/` modules.
6. Added a **development script** (`run_dev.sh`) for launching Uvicorn with auto-reload.
7. Manually tested the health endpoint via browser and/or Postman to confirm server response.
8. Wrote clear **instructions in `README.md`**, including dependency installation, virtualenv activation, and run commands.
9. Cleaned up `.gitignore` and verified that all files are properly tracked and versioned.

The backend now runs in development mode with hot reload, correctly handles CORS, and serves as the entry point for future routes like `/chat` and `/summary`.

### The following are sub-steps for roadmap step 13:

13.1 Create `.env` and `.env.example` files
13.2 Define a `Settings` Pydantic model (BaseSettings)
13.3 Add strongly-typed fields (API keys, DB URL, CORS origins)
13.4 Load settings in a central `config/settings.py` module
13.5 Reference settings from `main.py` (CORS + future usage)
13.6 Add automatic environment loading (python-dotenv)
13.7 Add validation and defaults for missing variables
13.8 Update README with environment variable instructions

## 📅 Log Entry: November 23, 2025

**Step 13 – Pydantic Settings & Environment Management Completed**

This step transitioned the backend from a static configuration to a robust, environment-driven service using **Pydantic v2** and the `pydantic-settings` package. The configuration is now centralized, type-safe, validated, and automatically loaded from a `.env` file.

### ✅ What was accomplished:

- **Created**: `.env`, `.env.example`
- **Implemented**: `Settings` model in `config/settings.py` using `BaseSettings`
- **Configured fields**: `openai_api_key`, `database_url`, `cors_origins` (with validator), `llm_model`, `llm_temperature`, `debug`
- **Enabled automatic loading**: with `model_config` set to read `.env`
- **Updated**: `main.py` to load settings and apply dynamic CORS values
- **Validated inputs**: e.g., converting comma-separated CORS strings into lists
- **Documented**: usage and required variables in `README.md`

This setup will enable future backend modules to securely and consistently access configuration values for database connectivity, LLM behavior, session control, and deployment tuning—all from a single source of truth.

---

### The following are sub-steps for roadmap step 14:

14.1 Define `/chat` request and response schema (Pydantic models)
14.2 Design minimal in-memory message/session model for backend
14.3 Implement core chat handler function (non-streaming)
14.4 Add SSE response helper (generator that yields `data:` chunks)
14.5 Implement `/chat` SSE endpoint using FastAPI `StreamingResponse`
14.6 Integrate mock LLM streaming inside `/chat` (fake tokens)
14.7 Add basic error handling and server-side logging for `/chat`
14.8 Manually exercise `/chat` via curl / browser to verify SSE behavior

## 📅 Log Entry: November 29, 2025: roadmap changes

While implementing the SSE utilities in Step 14, we realized the roadmap lacked a dedicated step for **structured object streaming**. The gap became clear when defining `event: text` and `event: done`: the backend had no way to emit structured widgets or cards, even though the assistant will eventually generate them. This revealed that the backend transport layer and LangGraph logic were not prepared to output structured objects in a validated, streamable format.

To fix this without renumbering the roadmap, we inserted a new step **20.5** between Steps 20 and 21. This is the correct location because Step 20 completes the basic text-streaming pipeline, and Step 21 focuses on frontend integration. Step 20.5 adds all backend and assistant capabilities required to produce structured objects before exposing them to the frontend.

In Step 29, we originally planned only UI/UX polish. While mapping out the event system for objects, we also recognized the need for a dedicated mechanism to stream warnings or recoverable errors from the backend. This led to adding **29b (Error-Recovery and Retry Handling)** and **29c (`event: alert` support)** so the frontend can handle assistant-side issues gracefully and consistently.

### Updated Roadmap

1. Install and set up VSCode
2. Install and set up Cursor
3. Create repo and initialize Git workspace
4. Scaffold frontend with Vite + React + TypeScript
5. Install and configure Tailwind CSS v4
6. Install and configure shadcn/ui (Tailwind v4 compatible)
   6b. Set up shadcn MCP server for Cursor integration
7. Build global UI shell (header, container, chat layout)
8. Implement chat message components and input bar
9. Add SSE client hook (EventSource) with polling fallback
10. Draft custom widgets directly in Cursor
11. Refactor widgets to shadcn/ui conventions
12. Scaffold FastAPI backend with Uvicorn and CORS
13. Define Pydantic settings and environment management
14. Implement `/chat` SSE endpoint (token streaming)
15. Implement `/summary` endpoint (JSON)
16. Wire LLM provider
17. Build LangGraph “interview → summary” flow
18. Design SQLModel models
19. Implement persistence services
20. Stream-and-save messages during `/chat`

20.5 Add structured object streaming support
20.5.1 Add `event: object` SSE formatter
20.5.2 Define Pydantic object payload models
20.5.3 Extend LangGraph to output structured objects
20.5.4 Convert structured objects to SSE events
20.5.5 Basic tests (optional)
20.5.6 Document object event protocol

21. Connect frontend to backend endpoints
22. Add anonymous session handling
23. Configure local dev (proxy, CORS, env vars)
24. Write minimal tests
25. Deploy frontend
26. Deploy backend
27. Production config (CORS, HTTPS, SSE stability)
28. Observability (logs, request IDs, monitoring)
29. Polish UI/UX
    29b. Error-Recovery and Retry Handling
    29c. Add `event: alert` support
30. Security hardening
