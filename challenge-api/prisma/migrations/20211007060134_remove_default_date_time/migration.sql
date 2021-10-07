-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "numberOfItems" INTEGER NOT NULL,
    "isComplete" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_item" ("createdAt", "description", "id", "isComplete", "numberOfItems", "title", "updatedAt") SELECT "createdAt", "description", "id", "isComplete", "numberOfItems", "title", "updatedAt" FROM "item";
DROP TABLE "item";
ALTER TABLE "new_item" RENAME TO "item";
CREATE UNIQUE INDEX "item_title_key" ON "item"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
