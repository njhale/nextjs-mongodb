FROM node:21.1.0-alpine AS builder
WORKDIR /build
COPY . .

# ------------------------------
# Install dependencies
# ------------------------------
RUN apk add python3 build-base
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# ------------------------------
# Generate prisma types
# ------------------------------
RUN npx prisma generate

# ------------------------------
# Build NextJS app
# ------------------------------
RUN npm run build

# ------------------------------
# Serve build
# ------------------------------
FROM node:21.1.0-alpine
WORKDIR /server

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /build .

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production \
    PORT=3000

CMD ["node", "server.js"]