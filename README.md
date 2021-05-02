# React Wrapper for existing pikaday library.

## [Try Pikaday Demo](https://basitowaisi.github.io/pikaday)

Only dependencies that need to be installed are moment.js and the pikaday package.


Pikaday
========


### A refreshing JavaScript Datepicker

* Lightweight (less than 5kb minified and gzipped)
* No dependencies (but plays well with [Moment.js][moment])
* Modular CSS classes for easy styling



## Usage

**Pikaday** can be bound to an input field:

```React
import Pikaday from "./Pikaday"
<Pikaday value={new Date()} onChange={handleChange} />
```

### Configuration

As the examples demonstrate above
Pikaday has many useful options:

* `bound` automatically show/hide the datepicker on `field` focus (default `true` if `field` is set)
* `position` preferred position of the datepicker relative to the form field, e.g.: `top right`, `bottom right` **Note:** automatic adjustment may occur to avoid datepicker from being displayed outside the viewport, see [positions example][] (default to 'bottom left')
* `format` the default output format value
* `value` the initial date to view when first opened
* `setDefaultDate` Boolean (true/false). make the `defaultDate` the initial selected value
* `firstDay` first day of the week (0: Sunday, 1: Monday, etc)
* `minDate` the minimum/earliest date that can be selected (this should be a native Date object - e.g. `new Date()` or `moment().toDate()`)
* `maxDate` the maximum/latest date that can be selected (this should be a native Date object - e.g. `new Date()` or `moment().toDate()`)
* `disableWeekends` disallow selection of Saturdays or Sundays
* `isDayBlocked` callback function that gets passed a Date object for each day in view. Should return true to disable selection of that day.
* `yearRange` number of years either side (e.g. `10`) or array of upper/lower range (e.g. `[1900,2015]`)
* `showWeekNumber` show the ISO week number at the head of the row (default `false`)
* `pickWholeWeek` select a whole week instead of a day (default `false`)
* `showMonthAfterYear` render the month after year in the title (default `false`)
* `showDaysInNextAndPreviousMonths` render days of the calendar grid that fall in the next or previous months (default: false)
* `enableSelectionDaysInNextAndPreviousMonths` allows user to select date that is in the next or previous months (default: false)
* `visibleMonths` number of visible calendars
* `mainCalendar` when `visibleMonths` is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`). Only used for the first display or when a selected date is not already visible
* `events` array of dates that you would like to differentiate from regular days (e.g. `['Sat Jun 28 2017', 'Sun Jun 29 2017', 'Tue Jul 01 2017',]`)
* `className` define a classname that can be used as a hook for styling different themes
* `blurFieldOnSelect` defines if the field is blurred when a date is selected (default `true`)
* `onSelect` callback function for when a date is selected
* `onOpen` callback function for when the picker becomes visible
* `onClose` callback function for when the picker is hidden
* `onDraw` callback function for when the picker draws a new month



## Browser Compatibility

* IE 7+
* Chrome 8+
* Firefox 3.5+
* Safari 3+
* Opera 10.6+

[![browser compatibility](https://ci.testling.com/rikkert/pikaday.png)
](https://ci.testling.com/rikkert/pikaday)


* * *

## Authors

* David Bushell 
* Ramiro Rikkert 

Copyright © 2014 David Bushell | BSD & MIT license



