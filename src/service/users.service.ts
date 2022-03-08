import { ObjectId } from 'mongodb';
import { UpdateUserInput, UserInput } from '../generated/graphql';
import database from '../utils/database';

export default class Users {
  async findAllUsers() {
    const db = await database();
    const response = await db.collection('Users').find({}).toArray();

    return response;
  }

  async findOneUser(_id: string) {
    const db = await database();
    const response = await db
      .collection('Users')
      .findOne({ _id: new ObjectId(_id) });

    return response;
  }

  async createUser(body: UserInput) {
    const db = await database();
    await db.collection('Users').insertOne(body);

    return 'User was created successfully';
  }

  async updateUser(_id: string, body: UpdateUserInput) {
    const db = await database();
    await db.collection('Users').updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          name: body.name,
          lastname: body.lastname,
          email: body.email,
        },
      }
    );

    return 'User was updated successfully';
  }

  async deleteUser(_id: string) {
    const db = await database();
    await db.collection('Users').deleteOne({ _id: new ObjectId(_id) });

    return 'User was removed successfully';
  }
}
