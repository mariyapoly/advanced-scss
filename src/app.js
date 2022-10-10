import database from "./json/exam-databse.json";
import { enum_divider, helper } from "./utils";

function isDivider(prop, obj) {
  let result = {
    isStart: false,
    isEnd: false,
  };

  if (
    helper.isString(prop) &&
    (prop.startsWith(enum_divider.start) || prop.startsWith(enum_divider.end))
  ) {
    const isStart = prop.startsWith(enum_divider.start);
    const id = helper.findID(prop, isStart);
    const reverseId = helper.reverseDivider(prop, isStart);
    const type = isStart ? "isStart" : "isEnd";
    if (Reflect.has(obj, reverseId) && !Reflect.has(obj, id)) {
      result[type] = true;
    } else {
      console.warn("Something is wrong", prop);
    }
  }

  return result;
}

const queue = [];
const data = {};

for (let obj of database) {
  for (let property in obj) {
    const { isStart, isEnd } = isDivider(property, obj);
    let canUse = true;
    if (isStart) {
      const id = helper.findID(property);
      queue.push(id);
      canUse = false;
    }
    if (isEnd) {
      const id = helper.findID(property, false);
      const indx = queue.indexOf(id);
      queue.splice(indx);
      canUse = false;
    }
    let endPoint = data;

    for (let scope of queue) {
      if (!Reflect.has(endPoint, scope)) {
        endPoint[scope] = {};
      }
      endPoint = endPoint[scope];
    }

    if (canUse) {
      endPoint[property] = obj[property];
    }
  }
}

console.log(data);
