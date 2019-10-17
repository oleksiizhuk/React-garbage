import React, {Component} from 'react';
import Spinner from "../spiner";

const withDataHOC = (View, getData) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({data})
        });
    };

    render() {
      const {data} = this.state;
      if (!data) {
        return <Spinner/>
      }
      return <View {...this.props} data={data}/>
    }
  }
};

export default withDataHOC;
