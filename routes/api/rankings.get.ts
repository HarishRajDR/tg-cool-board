import { prisma } from "../../db/prisma-init";

export default defineEventHandler(async (event) => {
  try {
    const data = await prisma.ranking.findMany();
    return data;
  } catch (error) {
    setResponseStatus(event, 503, "Server error");
  }
});
