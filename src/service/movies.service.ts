import { ObjectId } from 'mongodb';
import { MovieInput } from '../generated/graphql';
import database from '../utils/database';

export class Movies {
  async findAllMovies() {
    const db = await database();
    const response = await db.collection('Movies').find({}).toArray();

    return response;
  }

  async findOneMovie(_id: string) {
    const db = await database();
    const response = await db
      .collection('Movies')
      .findOne({ _id: new ObjectId(_id) });

    return response;
  }

  async createMovie(body: MovieInput) {
    const db = await database();
    await db.collection('Movies').insertOne(body);

    return 'Movie was created successfully';
  }

  async updateMovie(_id: string, body: MovieInput) {
    const db = await database();
    await db.collection('Movies').updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          name: body.name,
          category: body.category,
          age: body.age,
        },
      }
    );

    return 'Movie was updated successfully';
  }

  async deleteMovie(_id: string) {
    const db = await database();
    await db.collection('Movies').deleteOne({ _id: new ObjectId(_id) });

    return 'User was removed successfully';
  }
}
