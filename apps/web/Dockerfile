# Dockerfile for apps/web (Next.js, pnpm, Turborepo)

# ---- Base image ----
FROM node:20-alpine AS base

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

# Install libc6-compat for Next.js on Alpine; git is required to inject GIT_COMMIT during build
RUN apk add --no-cache libc6-compat git \
  && corepack enable

# ---- Dependencies ----
FROM base AS deps
WORKDIR /repo

# Copy workspace metadata (use repo root as build context: docker build -f apps/web/Dockerfile .)
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./

# Copy package.json of workspace packages involved in install (add more if needed)
COPY packages/ui/package.json packages/ui/package.json

# Copy this app's package.json
COPY apps/web/package.json apps/web/package.json

# Install dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# ---- Build ----
FROM deps AS builder
WORKDIR /repo

# Copy entire repository and build
COPY . .

# Build target app (Next.js)
ARG GIT_COMMIT=unknown
ENV GIT_COMMIT=$GIT_COMMIT
RUN pnpm --filter web build

# ---- Runtime ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only runtime artifacts (standalone output + static assets + public)
COPY --from=builder /repo/apps/web/.next/standalone ./
COPY --from=builder /repo/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /repo/apps/web/public ./apps/web/public

# Next.js listens on 3000 by default
EXPOSE 3000
ENV PORT=3000

CMD ["node", "apps/web/server.js"]
