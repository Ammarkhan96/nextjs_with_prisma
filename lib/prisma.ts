import { PrismaClient } from "@prisma/client";

const prismaGlobal = global as unknown as {prisma: PrismaClient}

export const prisma = prismaGlobal.prisma || new PrismaClient({
          log:["query"]
})