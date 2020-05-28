
function timeElapsed(last_date='May 27, 2020 00:00:00'){
    /**
     * @author hwpoison <github.com/hwpoison>
     */
  const t_now = new Date()                // actual date
  const t_past = new Date(last_date) // last date

  const time_struct = (timeDate)=>{
    return {
      day:   timeDate.getDate(),
      month: timeDate.getMonth(),
      year:  timeDate.getYear(),
      hour:  timeDate.getHours(),
      min:   timeDate.getMinutes()
      }
    }
    // time flags
    const actual = time_struct(t_now)
    const past = time_struct(t_past)
    const same_day = actual.day == past.day
    const same_month = actual.month == past.month
    const same_year = actual.year == past.year
    const mins_d = (actual.min - past.min)
    const hour_d = (actual.hour - past.hour)
    const day_d = (actual.day - past.day)
    const month_d = (actual.month - past.month)
    const year_d = (actual.year - past.year)

    // output messages
    const messages = {
      lastMinute:   'Hace segundos',
      lastMonth:    'El mes pasado',
      lastYear:     'El año pasado',
      lastDay:      'Ayer',
      inMonths:     'Hace $months meses',
      inYears:      'Hace $year años',
      inDays:       'Hace $day días',
      inMins:       'Hace $min minutos',
      inHours:      'Hace $hour horas',
      inFuture:     'Algun tiempo en el futuro'
    }

    // Today
    if(same_day && same_month && same_year){
      if((actual.hour) == past.hour){
        if(actual.min == past.min){
          return messages.lastMinute
        }else if(actual.min < past.min){
          mins_d = 60 - (-mins_d)
        }
          return messages.inMins.replace('$min', mins_d)
        }else{
          return messages.inHours.replace('$hour', hour_d)
        }
    // Last Day's
    }else if(same_month && same_year){
      if(actual.day-1 == past.day){
        return messages.lastDay
      }else{
        return messages.inDays.replace('$day', day_d)
      }   
    // Last Month's
    }else if(same_year){
      if(actual.month-1 == past.month){
        return messages.lastMonth
      }else{
        return messages.inMonths.replace('$month', month_d)
      } 
    // Last Year's and other time
    }else{
      if(actual.year-1 == past.year){
        return messages.lastYear
      }else{
        if(year_d < 1){
          return messages.inFuture
        }else{
          return messages.inYears.replace('$year', year_d)
        }
      }
    }
}