import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main () {

    const result = await prisma.courses.delete({
        where:{
            id:"c3610f10-dabb-4228-b5ee-0988cf082b15"
        }
    })
    console.log(result)
}

main()