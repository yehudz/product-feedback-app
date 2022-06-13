/*
  Warnings:

  - A unique constraint covering the columns `[commentId]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reply_commentId_key" ON "Reply"("commentId");
