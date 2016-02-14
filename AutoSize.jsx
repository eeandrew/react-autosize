import React from 'react';
import ReactDOM from 'react-dom';

export default class AutoSize extends React.Component {

	handleInput() {
		this.autoSize(ReactDOM.findDOMNode(this))
	}

	componentDidMount() {
		this.autoSize(ReactDOM.findDOMNode(this))
	}

	autoSize(rDom) {
		rDom.style.overflow = 'hidden';
		rDom.style.height = 'auto';
		rDom.style.height = rDom.scrollHeight + 'px';
	}

	render() {
		const style = {
			resize:'none',
			border:'1px solid #666',
			borderRadius:'5px',
			width:'100%',
			outline:'none',
			fontSize:'16px',
			color:'#666',
			padding:'5px 10px',
		};

		return <textarea rows={1} className={this.props.autoSizeStyle} style={this.props.autoSizeStyle ? null : style} onChange={this.handleInput.bind(this)}>{this.props.children}</textarea>
	}
}

AutoSize.propTypes = {
	autoSizeStyle : React.PropTypes.string
}