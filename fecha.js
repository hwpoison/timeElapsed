function timeElapsed(x_date='May 25, 2021 00:00:00'){
    /**
     * @author hwpoison <github.com/hwpoison>
     */
  const t_now = new Date()              // actual date
  const unk_date = new Date(x_date) 	// undefined date

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
    const unk =   time_struct(unk_date)

    const same_day =   actual.day == unk.day
    const same_month = actual.month == unk.month
    const same_year =  actual.year == unk.year

    let   mins_d =    (actual.min - unk.min)
    const hour_d =    (actual.hour - unk.hour)
    const day_d =     (actual.day - unk.day)
    const month_d =   (actual.month - unk.month)
    const year_d =    (actual.year - unk.year)

    // output messages
    const messages = {
      lastMinute:   'Hace segundos',
      lastMonth:    'El mes pasado',
      lastYear:     'El año pasado',
      lastDay:      'Ayer',
      agoMonths:    'Hace $months meses',
      agoYears:     'Hace $year años',
      agoDays:      'Hace $day días',
      lastMins:     'Hace $min minutos',
      lastHours:    'Hace $hour horas',
      inSomeMonths: 'En $month meses',
      inSomeDays:   'En $day días.',
      inFuture:     'Algun tiempo en el futuro',
    }

    // Today
    if(same_day && same_month && same_year){
      if((actual.hour) == unk.hour){
        if(actual.min == unk.min){
          return messages.lastMinute
        }else if(actual.min < unk.min){
          mins_d = 60 - (-mins_d)
        }
          return messages.lastMins.replace('$min', mins_d)
        }else{
          return messages.lastHours.replace('$hour', hour_d)
        }
    // Last Day's
    }else if(same_month && same_year){
      if(actual.day-1 == unk.day){
        return messages.lastDay
      }else{
      	if(unk.day > actual.day){
      		return messages.inSomeDays.replace('$day', day_d*-1)
      	}
        return messages.agoDays.replace('$day', day_d)
      }   
    // Last Month's
    }else if(same_year){
      if(actual.month-1 == unk.month){
        return messages.lastMonth
      }else{
      	if(unk.month > actual.month){
      		return messages.inSomeMonths.replace('$month', month_d*-1)
      	}
        return messages.agoMonths.replace('$month', month_d)
      } 
    // Last Year's and other time
    }else{
      if(actual.year-1 == unk.year){
        return messages.lastYear
      }else{
        if(year_d < 1){
          return messages.inFuture
        }else{
          return messages.agoYears.replace('$year', year_d)
        }
      }
    }
}
