import fs from "fs";
import path from "path";

const booksDir = path.join(process.cwd(), "books");

export const getBooks = () => {
  const bookFileNames = fs.readdirSync(booksDir);
  const booksData = bookFileNames.map((bookFileName) => {
    const fullBookPath = path.join(booksDir, bookFileName);
    const bookContent = fs.readFileSync(fullBookPath, "utf-8");

    return {
      bookContent,
    };
  });

  return booksData;
};
