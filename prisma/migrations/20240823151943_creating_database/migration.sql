-- CreateEnum
CREATE TYPE "Category" AS ENUM ('GAME', 'VIDEO', 'ARTWORK', 'MUSIC');

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "thumbnail_url" VARCHAR(255) NOT NULL,
    "content_url" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
