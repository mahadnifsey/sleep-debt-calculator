// const getSleepHours = (day) => {
//     switch (day) {
//       case "monday":
//         return 8;
//         break;
//       case "tuesday":
//         return 7;
//         break;
//       case "wednesday":
//         return 8;
//         break;
//       case "thursday":
//         return 7;
//         break;
//       case "friday":
//         return 8;
//         break;
//       case "saturday":
//         return 7;
//         break;
//       case "sunday":
//         return 7;
//         break;
//     }
//   };
  
//   const getActualSleepHours = () =>
//     getSleepHours("monday") +
//     getSleepHours("tuesday") +
//     getSleepHours("wednesday") +
//     getSleepHours("thursday") +
//     getSleepHours("friday") +
//     getSleepHours("saturday") +
//     getSleepHours("sunday");
  
//   console.log(getActualSleepHours());
  
//   const getIdealSleepHours = () => {
//     const idealHours = 3;
//     return idealHours * 7;
//   };
  
//   console.log(getIdealSleepHours());
  
//   const calculateSleepDebt = () => {
//     const actualSleepHours = getActualSleepHours();
//     const idealSleepHours = getIdealSleepHours();
//     if (actualSleepHours === idealSleepHours) {
//       console.log("Well done, you have reached your weekly sleep target!");
//     } else if (actualSleepHours > idealSleepHours) {
//       console.log(
//         "You have exceeded your weekly sleep target by " +
//           (actualSleepHours - idealSleepHours) +
//           " hour(s)!"
//       );
//     } else {
//       console.log(
//         "You got " +
//           (idealSleepHours - actualSleepHours) +
//           " hour(s) less sleep than you needed this week. Get some rest."
//       );
//     }
//   };
  
//   calculateSleepDebt();

  // Refactored code
  const getActualSleepHours = () => 18 + 7 + 18 + 7 + 18 + 7 + 7;

  console.log(`Actual Sleep:${getActualSleepHours()} hours(s)`);
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  console.log(`Ideal Sleep:${getIdealSleepHours(8)} hours(s)`);
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if(actualSleepHours === idealSleepHours) {
        console.log('Well done, you have reached your weekly sleep target!');
    } else if(actualSleepHours > idealSleepHours) {
        console.log('You have exceeded your weekly sleep target by ' +(actualSleepHours-idealSleepHours)+' hour(s)!');
    } else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  };
  
  calculateSleepDebt();