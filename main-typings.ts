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