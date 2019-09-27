import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import blacklist from 'blacklist'

class Button extends PureComponent {
  build = props => {
    const {
      href,
      type,
      submit,
      block,
      className,
      children,
      isActive,
      size,
      component
    } = props

    let classes = classnames(
      'Button',
      'Button--' + type,
      { 'Button--block': block },
      { [`Button--${size}`]: size },
      { 'is-active': isActive }
    )

    // Combine classes
    classes = className ? `${classes} ${className}` : classes

    // Set valid attributes
    let attr = Object.assign({}, props)
    attr = blacklist(
      attr,
      'submit',
      'block',
      'className',
      'children',
      'isActive',
      'size',
      'component'
    )

    // Set type
    const btnType = submit ? 'submit' : 'button'
    console.log('component', component) // ? No idea

    dd(props)

    // Create element
    if (href) {
      return (
        <a className={classes} {...attr}>
          {children}
        </a>
      )
    }

    return (
      <button className={classes} {...attr} type={btnType}>
        {children}
      </button>
    )
  }

  render() {
    return this.build(this.props)
  }
}

const BUTTON_SIZES = ['lg', 'sm', 'xs']
const BUTTON_TYPES = [
  'default',
  'default-primary',
  'default-success',
  'default-warning',
  'default-danger',
  'hollow-primary',
  'hollow-success',
  'hollow-warning',
  'hollow-danger',
  'primary',
  'success',
  'warning',
  'danger',
  'link',
  'link-text',
  'link-primary',
  'link-success',
  'link-warning',
  'link-danger',
  'link-cancel',
  'link-delete'
]

Button.defaultProps = {
  type: 'default'
}

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.element,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_SIZES),
  submit: PropTypes.bool,
  type: PropTypes.oneOf(BUTTON_TYPES)
}

export default Button
