export class Test {
  static propTypes = {
    prop: 'prop',
  };

  static defaultProps = {
    prop: 'default value',
  };

  state = {
    value: 'intial state value',
  };

  someFunction = () => {
    return 'test'
  };

  render() {
    return 'test'
  }
}
