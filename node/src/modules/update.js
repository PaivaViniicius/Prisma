import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main () {
    const result = await prisma.modules.update({
        where: {
            id:"ab5c2286-9b52-4f44-a1ab-b5a33d7ee41d"
        }, 
        data: {
            name: "São Paulo",
            duration: 200,
             description: "Vamo timee"
        },
       

    })
    

    console.log(result);
}

main()