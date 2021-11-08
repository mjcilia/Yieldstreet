/**
 * Maps Object Keys to Array and Filters for
 * Non Truthy Values
 *
 * @param data {Object}
 * @returns Array<string | boolean>
 */
export const transformObjectToArray = (
  data: Object
): Array<string | boolean> => {
  return Object.keys(data)
    .map((keyName) => ((data as any)[keyName] ? keyName : false))
    .filter((x) => x);
};
