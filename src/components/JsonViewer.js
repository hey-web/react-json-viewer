import './JsonViewer.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Bracket = ({b}) => <span className="bracket">&nbsp;{b}&nbsp;</span>;
const ListWrapper = ({children}) => <section>{children}</section>;
const MapWrapper = ({children}) => <section>{children}</section>;

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

const Node = ({k, val, last=false}) => {
  let nodes = [];
  if (typeof k != 'undefined') {
    nodes.push(<NodeKey key={0} k={k}/>);
  }
  if (val instanceof Array) {
    nodes.push(<Bracket b={'['}/>);
    nodes.push(<NodeList key={1} list={val}/>);
    nodes.push(<Bracket b={']'}/>);
  } else if(val && typeof val === 'object') {
    nodes.push(<Bracket b={'{'}/>);
    nodes.push(<NodeMap key={1} map={val}/>);
    nodes.push(<Bracket b={'}'}/>);
  } else {
    nodes.push(<span key={1}>{typeof val === 'string' ? '"' + val + '"': val}</span>);
  }
  return <div>{nodes}{!last&&','}</div>;
}


const JsonViewer = ({json = {}}) => {
  return <section className={'json-viewer'}><Node val={json} last={true}/></section>;
}

JsonViewer.propTypes = {
  json: PropTypes.object.isRequired
};

export default JsonViewer;