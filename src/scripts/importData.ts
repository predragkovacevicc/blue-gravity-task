import { readFile } from 'node:fs/promises';
import { contentModel, userModel, ratingModel } from '@models';
import { User, Content } from '@prisma/client';

const getRandom = (arr: User[] | Content[]) => arr[Math.floor(Math.random() * arr.length)];

const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

const createContents = async () => {
  try {
    const data = JSON.parse(await readFile('./data/contents.json', { encoding: 'utf-8' }));
    await contentModel.createMany({ data });
  } catch (err) {
    console.error(err);
  }
};

const createUsers = async () => {
  try {
    const data = JSON.parse(await readFile('./data/users.json', { encoding: 'utf-8' }));
    await userModel.createMany({ data });
  } catch (err) {
    console.error(err);
  }
};

const createRatings = async () => {
  try {
    const contents = await contentModel.findMany();
    const users = await userModel.findMany();

    const arr = Array.from({ length: 100 });

    await Promise.all(
      arr.map(() => {
        const randomContent = getRandom(contents) as Content;
        const randomUser = getRandom(users) as User;

        const randomNumber = getRandomNumber();

        const data = {
          rate: randomNumber,
          User: { connect: { id: randomUser.id } },
          Content: { connect: { id: randomContent.id } },
        };

        return ratingModel.create({ data });
      }),
    );
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  await createContents();
  await createUsers();
  await createRatings();
})();
