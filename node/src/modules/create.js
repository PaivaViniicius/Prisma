import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const result = await prisma.modules.create({
        data: {
            name: "Clayton",
            description: "Mosqueteiro"

        }
    })

    console.log(result)
}


main()