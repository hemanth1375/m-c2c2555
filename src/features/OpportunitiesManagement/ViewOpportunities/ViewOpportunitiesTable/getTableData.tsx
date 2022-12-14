import { faker } from "@faker-js/faker";
import { PaginationData, PaginationProps } from "./TableTypes";

//this function returns pagination info and fetchedData in object format
const getTableData = <T extends object>({
  limit,
  offset,
}: PaginationProps): PaginationData<T> => {
  console.log(limit);
  const data = Array(1000)
    .fill("")
    .map((_, id) => ({
      id,
      name: faker.name.fullName(),
      email: faker.internet.email(),
    }))
    .slice(offset, limit + offset) as T[];
  return {
    pagination: { limit, offset, total: 1000 },
    data,
  };
};

export default getTableData;
