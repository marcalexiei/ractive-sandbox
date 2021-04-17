import Ractive, { InitOpts } from 'ractive';

class MyComponent extends Ractive {
  constructor(opts?: InitOpts) { super(opts); }

  myFeature() { }
}

Ractive.extendWith(MyComponent, {
  template: 'hello!',

  on: {
    asd() {
      this.myFeature();
    }
  }
});

const myComponent = new MyComponent();

class MyMainComponent extends Ractive {
  constructor(opts?: InitOpts) { super(opts); }
}

Ractive.extendWith(MyMainComponent, {
  components: {
    MyComponent,
  },

  on: {
    asd() {

    }
  }
});

const AnotherMainComponent = MyComponent.extend({
  components: {
    MyComponent,
  },
}, { template: '' });

// Ractive.sort
myComponent.sort('asd');
myComponent.sort<string>('asd', (a, b) => {
  return a.indexOf('a');
});

// Ractive.find
const el = myComponent.find('div');
const svg = myComponent.find<SVGElement>('svg');
const svgs = myComponent.findAll<SVGElement>('svg');
const svgPath = myComponent.find<SVGPathElement>('svg path');
const HTMLElement = myComponent.find<HTMLDivElement>('svg');

// Context
myComponent.on('foo', function (context) {
  const bar = context.get<number>('bar');

  const contextEl = context.find('div');
  const contextSvg = context.find<SVGElement>('svg');

  const contextEls = context.findAll('div');
  const contextSvgs = context.findAll<SVGElement>('svg');

  const contextCmp = context.findComponent<MyComponent>('MyComponent');
  const contextCmps = context.findAllComponents<MyComponent>('MyComponent');
});
