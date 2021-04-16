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


myComponent.sort('asd');
myComponent.sort<string>('asd', (a, b) => {
  return -1;
});

const svg = myComponent.find<SVGElement>('svg');
const svgs = myComponent.findAll<SVGElement>('svg');
const svgPath = myComponent.find<SVGPathElement>('svg path');
const HTMLElement = myComponent.find<HTMLDivElement>('svg');

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

