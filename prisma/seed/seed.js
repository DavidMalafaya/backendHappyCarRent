import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const lojas = await prisma.lojas.createMany({
    data: [
      {
        nome: "Loja de Viana",
        image:"https://st2.depositphotos.com/1033329/5394/i/600/depositphotos_53946361-stock-photo-viana-do-castelo.jpg",
        morada: "Rua A, 123",
        map: "https://cdn.discordapp.com/attachments/1019019692528111657/1180174662592909392/image.png?ex=657c764e&is=656a014e&hm=5f15899b1b970ec724fa1b20d335c72508cfc05c594716bb6518a54dd03fb5cc&",
        }
    ],
  });

  const frota = await prisma.frota.createMany({
    data: [
      {
        name: "Mercedes GLE 350d 4MATIC",
        descricao: "O Mercedes-Benz GLE 350d 4MATIC oferece uma experiência de condução única, com design elegante e conforto exclusivos. Com uma potência de 300 CV e um desempenho de 0-100 km/h em 5,9s, o GLE 350d 4MATIC oferece uma velocidade impressionante em todos os caminhos.",
        image: "https://images.unsplash.com/photo-1563721923422-b8ab92f88ab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
    ],
  });

  console.log('Seed concluído!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(1)
  });