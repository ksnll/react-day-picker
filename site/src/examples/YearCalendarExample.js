var React = require("react");
var DayPicker = require("react-day-picker");

require("react-day-picker/lib/style.css");
require("../style/YearCalendarExample.scss");

module.exports = React.createClass({

  displayName: "YearCalendarExample",

  getInitialState() {
    return {
      year: (new Date()).getFullYear()
    };
  },

  showPrevious() {
    this.setState({
      year: this.state.year - 1
    });
  },

  showNext() {
    this.setState({
      year: this.state.year + 1
    });
  },

  render() {
    var { year } = this.state;
    return (
      <div className="YearCalendarExample">
        <h1>
          <a onClick={ this.showPrevious }>{ year - 1 }</a>
          { year }
          <a onClick={ this.showNext }>{ year + 1 }</a>
        </h1>
        <DayPicker
          canChangeMonth={ false }
          initialMonth={ new Date(year, 0, 1) }
          numberOfMonths={ 12 }
        />
      </div>
    );
  }

});
