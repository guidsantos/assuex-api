import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  const user = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "seed@test.com",
      password: "123",
      name: "Seed",
      last_name: "Create user",
      cpf: "142.124.124-12",
      phone: "11 9128-1234",
    },
  });
  console.log({ user });
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
