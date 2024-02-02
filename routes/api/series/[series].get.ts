import { prisma } from "../../../db/prisma-init";

const checkNumber = (p: string) => {
  let pattern = /[0-9]+/i;
  return pattern.test(p);
};

export default defineEventHandler(async (event) => {
  const seriesID = getRouterParam(event, "series");
  if (!checkNumber(seriesID)) {
    setResponseStatus(event, 400, "ID can only be a number");
    return { message: "ID can only be a number" };
  }

  const series = parseInt(seriesID);

  if (series === 10) {
    return {
      message:
        "No cars were placed on the cool wall as it had been burned down.",
    };
  }

  if (series === 14 || series === 15) {
    return {
      message: "There was no cool wall segment during this series",
    };
  }

  if (series > 0 && series < 17) {
    try {
      const data = await prisma.coolWall.findMany({
        where: {
          Series: series,
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
    setResponseStatus(event, 400, "Invalid series");
    return { message: "Invalid series" };
  }
});
