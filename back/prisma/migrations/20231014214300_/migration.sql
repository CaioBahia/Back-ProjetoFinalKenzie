-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birth" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anouncement" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "fuel" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "fipe" DECIMAL(65,30),
    "price" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "adStatus" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Anouncement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "anouncement_id" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "cover_url" TEXT NOT NULL,
    "img_url1" TEXT,
    "img_url2" TEXT,
    "img_url3" TEXT,
    "img_url4" TEXT,
    "img_url5" TEXT,
    "img_url6" TEXT,
    "anouncement_id" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_user_id_key" ON "Address"("user_id");

-- AddForeignKey
ALTER TABLE "Anouncement" ADD CONSTRAINT "Anouncement_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_anouncement_id_fkey" FOREIGN KEY ("anouncement_id") REFERENCES "Anouncement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_anouncement_id_fkey" FOREIGN KEY ("anouncement_id") REFERENCES "Anouncement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
