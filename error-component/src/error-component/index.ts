import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { Schema } from "../schema";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function errorComponent(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { errorMessage } = _options;
    tree.create("/output/error-component.ts", `console.log(${errorMessage});`);
    return tree;
  };
}
