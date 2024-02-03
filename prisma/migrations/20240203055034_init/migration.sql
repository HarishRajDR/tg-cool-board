-- CreateTable
CREATE TABLE "CoolWall" (
    "id" INTEGER NOT NULL,
    "Car" TEXT NOT NULL,
    "InitialRanking" TEXT,
    "Series" INTEGER NOT NULL,
    "Episode" INTEGER NOT NULL,
    "rankingId" INTEGER NOT NULL,

    CONSTRAINT "CoolWall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ranking" (
    "id" INTEGER NOT NULL,
    "rank" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Ranking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoolWall" ADD CONSTRAINT "CoolWall_rankingId_fkey" FOREIGN KEY ("rankingId") REFERENCES "Ranking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
