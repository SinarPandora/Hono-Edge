import {PrismaClient} from '@prisma/client';
import {PrismaClient as PrismaEdge} from '@prisma/client/edge';
import {withAccelerate} from "@prisma/extension-accelerate";

const prisma = (process.env.VERCEL === '1'
    ? new PrismaEdge().$extends(withAccelerate())
    : new PrismaClient()) as unknown as PrismaClient

export default prisma;
