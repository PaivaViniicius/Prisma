import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main () {
    const courses = await prisma.modules.findMany({
        where: {
            name: {
                equals: 'TMJ'
            }
        }
    })

    console.log(courses)
}


main()