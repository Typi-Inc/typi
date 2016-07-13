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
        return shallowCompare(this, nextProps, nextState)
      }
      componentDidMount() {
        this.componentHasMounted = true
      }
      componentWillUnmount() {
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

