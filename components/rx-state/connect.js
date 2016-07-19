import React from 'react'
import shallowCompare from 'react-addons-shallow-compare';
import state$ from './state'
function connect(selector = state => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      constructor(props) {
        super(props)
        this.componentHasMounted = false
        this.subscription = state$.map(selector).subscribe(
          state => !this.componentHasMounted ? this.state = state : this.setState(state)
        )
      }
      shouldComponentUpdate(nextProps, nextState){
        // let t0 = performance.now();
        // shallowCompare(this, nextProps, nextState);
        // let t1 = performance.now();
        // console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

        return shallowCompare(this, nextProps, nextState)
      }
      componentDidMount() {
        // console.log(`mounging ${WrappedComponent}`)
        this.componentHasMounted = true
      }
      componentWillUnmount() {
        // console.log('unmoungin')
        this.subscription.unsubscribe()
      }
      render() {
        
        return (
          <WrappedComponent ref={el => this.component = el} {...this.state} {...this.props} />
        )
      }
    }
  }
}

export default connect

