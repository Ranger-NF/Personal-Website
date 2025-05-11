# ---------- Base ----------
FROM node:23-alpine AS base
WORKDIR /usr/src/app
RUN apk add --no-cache libc6-compat

# ---------- Dependencies ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN npm install

# ---------- Build ----------
FROM deps AS build
COPY . .
RUN npm run build

# ---------- Production ----------
FROM base AS production
WORKDIR /usr/src/app

# Copy built app + dependencies
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app ./

EXPOSE 4173
CMD ["npm", "start"]
