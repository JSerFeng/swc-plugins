import _, { noop } from "lodash";

var array = [_, _, _.noop, _.noop, noop, noop];

noop(_, _, _.noop, _.noop, noop, noop);
