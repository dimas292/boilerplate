import { prismaClient } from "../external/orm/prisma.js"

const findAll = async() => {
  try {
    const data = await prismaClient.books.findMany()
    return data
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error; 
  }
}
const findByID = async (id) => {
  try {
    const data = await prismaClient.books.findUnique({
      where: {
        id: String(id), 
      },
    });
    if (!data) {
      throw new Error('Book not found'); 
    }
    return data;
  } catch (error) {
    console.error('Error fetching book by ID:', error.message);
    throw error; 
  }
};

export { findAll, findByID }
