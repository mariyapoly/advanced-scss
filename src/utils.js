export const enum_divider = {
  start: "__",
  end: "_#",
};

export const helper = {
  isString(prop) {
    return typeof prop === "string";
  },

  findID(prop, isStart = true) {
    const type = isStart ? enum_divider.start : enum_divider.end;
    const originalId = prop.split(type)[1];
    return originalId;
  },

  reverseDivider(prop, isStart) {
    const type = isStart ? enum_divider.start : enum_divider.end;
    const reverseType = isStart ? enum_divider.end : enum_divider.start;
    const originalId = prop.split(type)[1];
    return reverseType + originalId;
  },
};
