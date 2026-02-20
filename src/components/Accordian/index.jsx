import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector('.panel__inner').scrollHeight;
      this.setState({
        height
      });
    }, 333);
  }

  render() {
    const {label, content, link, activeTab, index, activateTab} = this.props;
    const {height} = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`
    };

    return (
      <div className={`panel ${isActive ? 'panel--active' : ''}`} role="tabpanel">
        <button className="panel__label" role="tab" onClick={activateTab} aria-expanded={isActive}>
          {label}
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="panel__content">
            {content}
            {link && (
              <>
                {' '}
                <a href={link.url}>{link.text}</a>
              </>
            )}
          </p>
        </div>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: -1
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState(prev => ({
      activeTab: prev.activeTab === index ? -1 : index
    }));
  }

  render() {
    const {panels} = this.props;
    const {activeTab} = this.state;
    return (
      <div className="accordion" role="tablist">
        {panels.map((panel, index) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        ))}
      </div>
    );
  }
}

export { Accordion };

