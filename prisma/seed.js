
if ( !process.env.DB_URL ) {
  process.env.DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
}

const { PrismaClient } = require('@prisma/client');

const entries = [
  {
    uid: 'vscode',
    name: 'VSCode plugin',
    content: '[Install our plugin](https://github.com/acorn-io/vscode-acorn) to integrate with VSCode'
  },
  {
    uid: 'authoring',
    name: 'Add Acorn to your own app',
    content: '[Read more](https://docs.acorn.io/authoring/overview) about authoring your own Acornfile.'
  },
  {
    uid: 'actions',
    name: 'GitHub Actions',
    content: '[Integrate Acorn](https://docs.acorn.io/integrations/github-actions) into your CI/CD workflow with GitHub actions'
  },
]

const prisma = new PrismaClient()
async function main() {
  for ( const e of entries ) {
    await prisma.todo.upsert({
      where: { uid: e.uid },
      update: {},
      create: e
    })
  }
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
