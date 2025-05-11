# ---------- Base ----------
FROM node:23-alpine AS base
WORKDIR /usr/src/app
RUN apk add --no-cache libc6-compat

# ---------- Dependencies ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN npm install --frozen-lockfile

# ---------- Build ----------
FROM deps AS build
COPY . .
RUN npm run build

# ---------- Final image: just contains static site for Caddy ----------
FROM alpine AS final
WORKDIR /site
COPY --from=build /usr/src/app/dist .
