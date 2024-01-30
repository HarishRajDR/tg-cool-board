import { prisma } from "../../db/prisma-init";

export default defineEventHandler(async (event) => {
  try {
    const data = await prisma.coolWall.findMany({
      include: {
        Ranking: {
          select: {
            rank: true,
            desc: true,
          },
        },
      },
    });
    return data;
  } catch (error) {
    setResponseStatus(event, 503, "Server error");
  }
});
