/// <reference path="fourslash.ts" />

//// import * as ns from "./module";
//// f1/*0*/();

// @Filename: module.ts
//// export function f1() {}
//// export var v1 = 5;

verify.codeFixAtPosition(
`import * as ns from "./module";
ns.f1();`
);