export const transformObjectToArray = (data: Object) => {
  return Object.keys(data)
    .map((keyName) => ((data as any)[keyName] ? keyName : false))
    .filter((x) => x);
};
