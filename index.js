
function calculateBMI(weight, height){ 
const BMI = weight / (height * height);  
return BMI; 
} 

function calculateBMR (weight, height, ageOfUser, genderOfUser) { 
const heightInCm = height * 100;  
let BMR; 
if (genderOfUser === 'm') { 
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50; 
} else { 
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
} 
return BMR;
} 

function calculateIdealWeight (height) { 
    let idealWeight; 
    idealWeight = 22.5 * height * height; 
    return idealWeight;
} 

function calculateDailyCalories (exercise, metaRate) {  
    let dailyCalories; 
    if(exercise === 'yes') { 
        dailyCalories = metaRate * 1.6; 
    } else { 
        dailyCalories = metaRate * 1.4; 
    } 
    return dailyCalories;
} 

function calculateWeightToLose(weight, ideal) { 
    let weightToLose; 
    weightToLose = weight - ideal;   
    return weightToLose;
} 

function calculateDietWeeks(weight) {  
let DietWeeks; 
DietWeeks = Math.abs(weight / 0.5); 
return DietWeeks;
} 

function calculateDietCalories(weight, calories) { 
    let dietCalories;  
    if (weight > 0) { 
        dietCalories = calories - 500;  
    } else { 
        dietCalories = calories + 500;
    } 
    return dietCalories;
}

//  Side effect functions: 

function validateNumberOfInputs(argv) { 
if (argv.length !== 7) { 
    console.log(`
      You gave ${argv.length - 2} arguments(s) to the program
  
      Please provide 5 arguments for
      
      weight (kg), 
      height (m), 
      age (years), 
      wether you exercise daily (yes or no)
      and your gender (m or f)
      
      Example:
  
      $ node index.js 82 1.79 32 yes m`); 
    process.exit();
}
}

function validateWeightHeightAge (weight, height, age) {
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        console.log(`Please make sure weight, height and age are numbers:

        weight (kg) example: 82 | your input: ${weight} }
        height (m) example 1.79 | your input: ${height} }
        age (years) example 32  | your input: ${age} } 
    
        $ node index.js 82 1.79 32 yes m`); 
        process.exit();
    }
} 

function validateDailyExercise(exercise) { 
    if (exercise !== 'yes' && exercise !== 'no') { 
        console.log(`Please specify if you daily exercise with "yes" or "no" 
        You typed: ${exercise}`);   
        process.exit();
    }
} 

function validateGender(gender) { 
    if (gender !== "m" && gender !== "f") { 
       console.log(`Please specify your gender by typing "m" or "f"
       You typed: ${gender}`); 
       process.exit();
    }
}

function formatOutput (user) { 
    console.log(user); 
}

function bmiCalculator() { 
    
    validateNumberOfInputs(process.argv);  

    const weightInKg = parseInt(process.argv[2]);
    const heightInM = parseFloat(process.argv[3]);
    const age = parseInt(process.argv[4]);
    const dailyExercise = process.argv[5];
    const gender = process.argv[6]; 

    validateWeightHeightAge(weightInKg, heightInM, age);   
    validateDailyExercise(dailyExercise); 
    validateGender(gender);

    const BMI = calculateBMI(weightInKg, heightInM);   
    const BMR = calculateBMR(weightInKg, heightInM, age, gender);     
    const idealWeight = calculateIdealWeight(heightInM);  
    const dailyCalories = calculateDailyCalories(dailyExercise, BMR);  
    const weightToLose = calculateWeightToLose(weightInKg, idealWeight);  
    const dietWeeks = calculateDietWeeks(weightToLose);  
    const dietCalories = calculateDietCalories(weightToLose, dailyCalories); 

        const user = {
            weightInKg: weightInKg,
            heightInM: heightInM,
            age: age,
            dailyExercise: dailyExercise,
            gender: gender,
            BMI: BMI,
            idealWeight: idealWeight,
            dailyCalories: dailyCalories,
            weightToLose: weightToLose,
            dietWeeks: dietWeeks,
            dietCalories: dietCalories,
          }; 
          const output = formatOutput(user);  
          console.log(output);
} 

bmiCalculator(); 