import Ractive from 'ractive';

function sharedFunction() {
  console.info('inside sharedFunction');
}

class MyComponent extends Ractive {
  constructor(opts) {
    super(opts);

    this.sharedFunction = sharedFunction;
    this.customProperty = [];

    console.info('constructor');
  }
}

Ractive.extendWith(MyComponent, {
  template: `
  Testing
  <button on-click="property">property</button>
  <button on-click="function">function</button>
  `,

  on: {
    property() {
      this.customProperty.push('prova');
      console.info(this.customProperty);
    },
    function() {
      this.sharedFunction();
    },
  },
});

Ractive.components.MyComponent = MyComponent;

const r = window.r = new Ractive({
  el: '#main',
  template: `
  <MyComponent></MyComponent>
  `,
});

const usingNew = new MyComponent({ el: '#using-new' });
