import fp, { camelCase } from "lodash/fp";
import { snakeCase } from "string";

export var case1 = camelCase;
export var case2 = fp.kebabCase;
export var case3 = snakeCase;
