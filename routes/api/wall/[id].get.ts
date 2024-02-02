import { prisma } from "../../../db/prisma-init";

const checkNumber = (p: string) => {
  let pattern = /[0-9]+/i;
  return pattern.test(p);
};

export default defineEventHandler(async (event) => {
  const carID = getRouterParam(event, "id");
  if (!checkNumber(carID)) {
    setResponseStatus(event, 400, "ID can only be a number");
    return { message: "ID can only be a number" };
  }

  const id = parseInt(carID);

  if (id > 0 && id < 137) {
    try {
      const data = await prisma.coolWall.findUnique({
        where: {
          id: id,
        },
        include: {
          Ranking: {
            select: {
              rank: true,
              desc: true,
            },
          },
        },
      });
      return { data: data };
    } catch (error) {
      setResponseStatus(event, 500, "Server error");
      return { message: "Server Error" };
    }
  } else {
    setResponseStatus(event, 400, "Invalid ID");
    return { message: "Invalid ID" };
  }
});
