import { prisma } from "../../../db/prisma-init";

const rankings = {
  szf: 1,
  sz: 2,
  c: 3,
  u: 4,
  su: 5,
  x: 6,
  tob: 7,
  wbsu: 8,
  wbsz: 9,
};

export default defineEventHandler(async (event) => {
  const rank = getRouterParam(event, "rank");
  const rankID = rankings[rank];

  if (rankID === undefined) {
    setResponseStatus(event, 403, `${rank} is not a valid rank`);
    return { message: `${rank} is not a valid rank` };
  }

  try {
    const data = await prisma.coolWall.findMany({
      where: {
        rankingId: {
          equals: rankID,
        },
      },
    });
    return { data: data };
  } catch (error) {
    setResponseStatus(event, 503, "Server error");
    return { message: "Server Error" };
  }
});
