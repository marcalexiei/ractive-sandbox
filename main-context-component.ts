import Ractive from "ractive";

Ractive.extend({
  on: {
    'clickity-clackety': function (context) {
      // context.ractive.component exists but has no definition
      context.ractive.component.name;

      // context.ractive.name doesn't exist
      context.component?.name;

      // Based on definitions, both `context.ractive.component` and `context.component` should be instances of Ractive.
      // This is not the case.
    }
  },
})
