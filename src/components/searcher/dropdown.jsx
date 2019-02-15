import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    hasFocus: false,
    lastSelect: 0
  };

  handleKeyDown = e => {
    console.log(e.key);
    
    if(e.key === "Enter")
    {
      const movie = this.props.result.filter(
        m => (parseInt(e.target.value,10) === m.id)
      );
     
      this.props.onQueryPostSelect(movie[0]);
    }
    else if(e.target.tagName ==='LI' && e.key === 'ArrowDown' ){
      let activePos = parseInt(document.activeElement.getAttribute("pos"),10);
      console.log( e.target.parentNode.lastChild, 'vs ',  e.target);
     
      e.target.parentNode.childNodes[activePos+1].focus();
      this.setState({ lastSelect:activePos+1 });
      
      

      
      
    }
  }

  // handleChange = e => {
  //   let upd = e.target.value;
  //   this.setState({ lastSelect: upd });
  // };

  // handleBlur = e => { console.log(e,'blr');
  //   this.props.onBlur(e);
  //   this.setState({ hasFocus: false });
  // };

  // handleFocus = e => {
  //   e.target.focus();
  //   this.props.onFocus(e);
  //   this.setState({ hasFocus: true });
  // };

  

  render() {
    return (
      <ul
        tabIndex="-1"
        role="listbox"
        id="list-suggestions"
        // onFocus={this.handleFocus}
        // onBlur={this.handleBlur}
        // value={this.state.lastSelect}
        //  onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      >
        {this.props.children}
      </ul>
    );
  }
}

export default Dropdown;
