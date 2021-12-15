module.exports = {
  arrayComparation: function (data) {
    let counter = 0;
    let aux = [];
    let result = [];
    //iterate each example, Example1-Example2-etc
    data.forEach((element) => {
      //getting entries of object
      element = Object.entries(element);
      //iterating through all combinations of persons
      for (let i = 0; i < element.length - 1; i++) {
        for (let j = i + 1; j < element.length; j++) {
          //comparation between workdays of person1 and person2
          element[i][1].work_days.map((data) => {
            let day = data.substring(0, 2);
            let hours_start = parseInt(data.substring(2, 4));
            let minutes_start = parseInt(data.substring(5, 7));
            let hours_end = parseInt(data.substring(8, 10));
            let minutes_end = parseInt(data.substring(11, 13));
            element[j][1].work_days.map((item) => {
              let day2 = item.substring(0, 2);
              let hours_start2 = parseInt(item.substring(2, 4));
              let minutes_start2 = parseInt(item.substring(5, 7));
              let hours_end2 = parseInt(item.substring(8, 10));
              let minutes_end2 = parseInt(item.substring(11, 13));
              //if they have same day and hour
              if (data === item) return counter++;
              //only if they enter the same day, map function to repeat days(using find it runs but you cant repeat days)
              if (day === day2) {
                //equality in entrance hour
                if (
                  hours_start === hours_start2 &&
                  minutes_start > minutes_start2
                ) {
                  if (hours_end === hours_end2 && minutes_end >= minutes_end2)
                    return counter++;
                  if (hours_end > hours_end2) return counter++;
                }
                //if they enter at the same hour but the first person minutes before
                if (
                  hours_start === hours_start2 &&
                  minutes_start < minutes_start2
                ) {
                  if (hours_end === hours_end2 && minutes_end <= minutes_end2)
                    return counter++;
                  if (hours_end > hours_end2) return counter++;
                }
                //First person enter first and second person enter first
                if (hours_start < hours_start2) {
                  if (hours_end >= hours_end2 && minutes_end >= minutes_end2)
                    return counter++;
                  if (hours_end > hours_end2) return counter++;
                }
                if (hours_start > hours_start2) {
                  if (hours_end === hours_end2 && minutes_end <= minutes_end2)
                    return counter++;
                  if (hours_end < hours_end2) return counter++;
                }
              }
            });
          });
          aux.push({
            partners: element[i][1].name + " " + element[j][1].name,
            common_days: counter,
          });
          counter = 0;
        }
      }
      let copy = [...aux];
      result.push(copy);
      aux.length = 0;
    });
    return result;
  },
};
