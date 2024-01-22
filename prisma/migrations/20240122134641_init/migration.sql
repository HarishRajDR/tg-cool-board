-- CreateTable
CREATE TABLE "CoolWall" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Car" TEXT NOT NULL,
    "InitialRanking" TEXT,
    "Series" INTEGER NOT NULL,
    "Episode" INTEGER NOT NULL,
    "rankingId" INTEGER NOT NULL,
    CONSTRAINT "CoolWall_rankingId_fkey" FOREIGN KEY ("rankingId") REFERENCES "Ranking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ranking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rank" TEXT NOT NULL,
    "desc" TEXT NOT NULL
);
