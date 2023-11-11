#!/bin/bash
echo $DB_URL
echo "Pushing DB…"
npx prisma db push
echo "Seeding DB…"
node prisma/seed.js