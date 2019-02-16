import React, { Component } from "react";

class Ul extends Component {
  state = {
    hasFocus: false,
    lastSelect: 0
  };

  handleKeyDown = e => {
    console.log(e.key);

    if (e.key === "Enter") {
      // const movie = this.props.result.filter(
        // m => parseInt(e.target.value, 10) === m.id
      // );
      // this.props.onQueryPostSelect(movie[0]);
      // console.log(e.target.innerHTML );
      
    }
    else if (e.target.tagName === "LI"){
      let activePos = parseInt(document.activeElement.getAttribute("pos"), 10);
      let lastChildPos = parseInt( e.target.parentNode.lastChild.getAttribute("pos"),10);


      if (e.key === "ArrowDown" && lastChildPos >= activePos + 1) {
        e.target.parentNode.childNodes[activePos + 1].focus();
        this.setState({ lastSelect: activePos + 1 });
      }
      else if (e.key === "ArrowUp")
      {
          if (!activePos) {
            
            this.props.inputRef.focus();
            let l = this.props.inputRef.value.length;
            console.log('leeeenght', l);
            setTimeout(() => {
              this.props.inputRef.setSelectionRange(l, l);
            }, 1);
            
            
          }
          else
          {
            e.target.parentNode.childNodes[activePos - 1].focus();
            this.setState({ lastSelect: activePos - 1 });
          }
      }
      
      // this.props.inputRef.value = e.target.parentNode.childNodes[this.state.lastSelect].innerHTML;
    }
  };

  componentDidMount() {
    this.props.setResultListRef(this._ul);
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
        ref={c => (this._ul = c)}
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

export default Ul;
