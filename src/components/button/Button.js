import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import blacklist from 'blacklist';

class Button extends PureComponent {
    
    createButton = (props) => {
        const {type, block, className, children, isActive, size} = props;
        let classes = classnames(
            'Button',
            'Button--' + type,
            { 'Button--block' : block },
            { [`Button--${size}`] : size },
            {'is-active' : isActive}
        );
        
        classes = (className) ? `${classes} ${className}` : classes;
        
        let attr = Object.assign({}, props);
        
        attr = blacklist(attr, 'className', 'block', 'isActive', 'size', 'type');

        return (
        <button className={classes} {...attr} type="button">
            {children}
        </button>)
    }
    render(){
        return this.createButton(this.props);
    }
}

Button.defaultProps = {
    type: 'default',
};

Button.propTypes = {
    type: PropTypes.string,
    block: PropTypes.bool,
};

export default Button;