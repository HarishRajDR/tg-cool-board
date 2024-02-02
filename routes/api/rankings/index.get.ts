import { prisma } from "../../../db/prisma-init";

export default defineEventHandler(async (event) => {
  try {
    const data = await prisma.ranking.findMany();
    return { data: data };
  } catch (error) {
    setResponseStatus(event, 500, "Server error");
    return { message: "Server Error" };
  }
});
