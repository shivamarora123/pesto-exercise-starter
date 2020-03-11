const deepCopyObject = objToCopy => {
  let copiedObject = {}, value

  if (typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy
  }
  for (let key in objToCopy) {

    value = objToCopy[key];
    copiedObject[key] = (typeof value === "object" && value !== null) ?
      deepCopyObject(value) : value
  }

  return copiedObject
}
export { deepCopyObject };
