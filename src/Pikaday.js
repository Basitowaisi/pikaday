import moment from "moment"
import pikaday from "pikaday"
import React, { useEffect, useRef, useState } from "react"
import "pikaday/css/pikaday.css"
import propTypes from "prop-types"

function Pikaday(props) {
  const {
    onChange,
    value,
    minDate,
    maxDate,
    isDayBlocked,
    pickWholeWeek,
    showMonthAfterYear,
    showDaysInNextAndPreviousMonths,
    enableSelectionDaysInNextAndPreviousMonths,
    visibleMonths,
    mainCalendarDirection,
    events,
    className,
    blurFieldOnSelect,
    onOpen,
    onClose,
    onDraw,
    disableWeekends,
    bound,
    format,
    id,
    name,
    placeholder,
    formatOutputAs,
    yearRange,
  } = props

  const [date, setDate] = useState(value)
  const pikadayRef = useRef()

  const handleSelect = (date) => {
    setDate(date)
    let formattedDate = date
    if (formatOutputAs) {
      formattedDate = moment(formattedDate).format(formatOutputAs)
    }
    onChange(formattedDate)
  }

  useEffect(() => {
    new pikaday({
      field: pikadayRef.current,
      format,
      onSelect: handleSelect,
      defaultDate: date,
      setDefaultDate: true,
      disableDayFn: isDayBlocked,
      showMonthAfterYear,
      pickWholeWeek,
      showDaysInNextAndPreviousMonths,
      enableSelectionDaysInNextAndPreviousMonths,
      minDate,
      maxDate,
      numberOfMonths: visibleMonths,
      mainCalendar: mainCalendarDirection,
      events,
      theme: className,
      blurFieldOnSelect,
      onOpen,
      onClose,
      onDraw,
      disableWeekends,
      keyboardInput: false,
      bound,
      yearRange,
    })
  }, [])

  const placeholderOption = value ? {} : { placeholder }

  console.log(pikadayRef.current?.value)
  return (
    <input
      type="text"
      id={id}
      name={name}
      readOnly
      {...placeholderOption}
      ref={pikadayRef}
    />
  )
}

Pikaday.defaultProps = {
  formatOutputAs: "DD-MM-YYYY",
  format: "DD-MM-YYYY",
  pickWholeWeek: false,
  showMonthAfterYear: false,
  showDaysInNextAndPreviousMonths: false,
  enableSelectionDaysInNextAndPreviousMonths: false,
  visibleMonths: 1,
  mainCalendarDirection: "left",
  events: [],
  className: null,
  blurFieldOnSelect: true,
  disableWeekends: false,
  bound: true,
  format: "MM/DD/YYYY",
  yearRange: [1950, new Date().getFullYear()],
}

Pikaday.propTypes = {
  events: propTypes.array,
  yearRange: propTypes.array,
  bound: propTypes.bool,
  disableWeekends: propTypes.bool,
  blurFieldOnSelect: propTypes.bool,
  onDraw: propTypes.func,
  onChange: propTypes.func,
  onClose: propTypes.func,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  pickWholeWeek: propTypes.bool,
  showMonthAfterYear: propTypes.bool,
  showDaysInNextAndPreviousMonths: propTypes.bool,
  enableSelectionDaysInNextAndPreviousMonths: propTypes.bool,
  isDayBlocked: propTypes.func,
  className: propTypes.string,
  formatOutputAs: propTypes.string,
  format: propTypes.string,
  mainCalendarDirection: propTypes.string,
  visibleMonths: propTypes.number,
  minDate: propTypes.instanceOf(Date),
  maxDate: propTypes.instanceOf(Date),
  value: propTypes.instanceOf(Date),
}

export default Pikaday
