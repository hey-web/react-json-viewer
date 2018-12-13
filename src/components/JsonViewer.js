import './JsonViewer.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Bracket = ({b}) => <span className="bracket">&nbsp;{b}&nbsp;</span>;
const ListWrapper = ({children}) => <section>{children}</section>;
const MapWrapper = ({children}) => <section>{children}</section>;
const CxpandBtn = ({expanded=false, onClick}) => <button type="button" className="expand-btn" onClick={onClick}>{expanded?'-':'+'}</button>

const NodeKey = ({k}) => (<label>{'"' + k + '"'}:</label>);
const NodeList = ({list}) => {
  return (
    <ListWrapper>
      {
        list.map((val, index) => {
          return <Node key={index} val={val} last={index === list.length - 1}/>;
        })
      }
    </ListWrapper>
  )
}

const NodeMap = (({map}) => {
  let length = Object.keys(map).length;
  let count = 0;
  return (
    <MapWrapper>
      {
        Object.keys(map).map(key => {
          count ++;
          return <Node key={key} k={key} val={map[key]} last={count === length}/>
        })
      }
    </MapWrapper>
  )
})

class Node extends Component {
  constructor(props){
    super(props);
    this.state = {expanded: true};
  }

  handleToggle = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    let {k, val, last} = this.props;
    let {expanded} = this.state;

    if (typeof val === 'undefined' || val === null) {
      return null;
    }

    let nodes = [];
    
    if (typeof k != 'undefined') {
      nodes.push(<NodeKey key={0} k={k}/>);
    }

    if (val instanceof Array) {
      nodes.push(<Bracket key={1} b={'['}/>);
      nodes.push(<CxpandBtn key={2} expanded={expanded} onClick={this.handleToggle}/>);
      expanded && nodes.push(<NodeList key={3} list={val}/>);
      nodes.push(<Bracket key={4} b={']'}/>);
    } else if(typeof val === 'object') {
      nodes.push(<Bracket key={1} b={'{'}/>);
      nodes.push(<CxpandBtn key={2} expanded={expanded} onClick={this.handleToggle}/>);
      expanded && nodes.push(<NodeMap key={3} map={val}/>);
      nodes.push(<Bracket key={4} b={'}'}/>);
    } else {
      nodes.push(<span key={1}>{typeof val === 'string' ? '"' + val + '"': val}</span>);
    }
    return <div>{nodes}{!last&&','}</div>;
  }
}

const JsonViewer = ({json = {}}) => {
  return <section className={'json-viewer'}><Node val={json} last={true}/></section>;
}

JsonViewer.propTypes = {
  json: PropTypes.object
};

export default JsonViewer;