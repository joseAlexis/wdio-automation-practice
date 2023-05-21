/**
 * Create a Form Data based on a object
 * @param obj
 * @returns FormData
 */
export const createFormDataFromJson = (obj: any) => {
  const data = new FormData();

  for (const key in obj) {
    data.append(key, obj[key]);
  }

  return data;
};
