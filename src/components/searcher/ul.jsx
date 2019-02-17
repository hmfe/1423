import React, { Component } from "react";

class Ul extends Component {
  state = {
    hasFocus: false,
    lastSelect: 0
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
       const movie = this.props.result.filter(
        m => parseInt(e.target.value, 10) === m.id
      );
      this.props.onQueryPostSelect(movie[0]);
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

  render() {
    return (
      <ul
        ref={c => (this._ul = c)}
        tabIndex="-1"
        role="listbox"
        id="list-suggestions"
        onKeyDown={this.handleKeyDown}
      >
        {this.props.children}
      </ul>
    );
  }
}

export default Ul;
