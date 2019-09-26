import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import blacklist from 'blacklist';

class Button extends PureComponent {
    
    createButton = (props) => {
        const {type, block, className, children} = props;
        let classes = classnames(
            'Button',
            'Button--' + type,
            { 'Button--block' : block },
        );
        
        classes = (className) ? `${classes} ${className}` : classes;
        
        let attr = Object.assign({}, props);
        
        attr = blacklist(attr, 'className', 'block');
        
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