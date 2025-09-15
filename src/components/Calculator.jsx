import React, { useMemo, useState } from "react";

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

function calculateBmr({ sex, age, weightKg, heightCm }) {
  if (!sex || !age || !weightKg || !heightCm) return null;
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === "male" ? base + 5 : base - 161;
}

function clampMinCalories(value, min = 1200) {
  if (value == null || Number.isNaN(value)) return null;
  return Math.max(min, Math.round(value));
}

const Calculator = () => {
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(70); // kg
  const [height, setHeight] = useState(175); // cm
  const [activity, setActivity] = useState("moderate");
  const [target, setTarget] = useState("maintain");

  const result = useMemo(() => {
    const bmr = calculateBmr({
      sex,
      age: Number(age),
      weightKg: Number(weight),
      heightCm: Number(height),
    });
    if (bmr == null) return null;
    const multiplier = activityMultipliers[activity] ?? 1.2;
    const calorieNeeds = bmr * multiplier;
    let targetCalories = calorieNeeds;
    switch (target) {
      case "lose":
        targetCalories = calorieNeeds - 500;
        break;
      case "gain":
        targetCalories = calorieNeeds + 500;
        break;
      case "extreme-lose":
        targetCalories = calorieNeeds - 1000;
        break;
      case "extreme-gain":
        targetCalories = calorieNeeds + 1000;
        break;
      default:
        targetCalories = calorieNeeds;
    }
    return clampMinCalories(targetCalories);
  }, [sex, age, weight, height, activity, target]);

  return (
    <section id="calorie-calculator" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Calorie Calculator
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700 dark:text-gray-300">Sex</span>
          <select
            className="border rounded px-3 py-2 bg-white text-gray-900 dark:bg-[#0b0b0b] dark:text-gray-100 dark:border-gray-700"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Age (years)
          </span>
          <input
            className="border rounded px-3 py-2 bg-white text-gray-900 dark:bg-[#0b0b0b] dark:text-gray-100 dark:border-gray-700"
            type="number"
            min={1}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Weight (kg)
          </span>
          <input
            className="border rounded px-3 py-2 bg-white text-gray-900 dark:bg-[#0b0b0b] dark:text-gray-100 dark:border-gray-700"
            type="number"
            min={1}
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Height (cm)
          </span>
          <input
            className="border rounded px-3 py-2 bg-white text-gray-900 dark:bg-[#0b0b0b] dark:text-gray-100 dark:border-gray-700"
            type="number"
            min={1}
            step="0.1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1 sm:col-span-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Activity level
          </span>
          <select
            className="border rounded px-3 py-2 bg-white text-gray-900 dark:bg-[#0b0b0b] dark:text-gray-100 dark:border-gray-700"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (1-3 days/week)</option>
            <option value="moderate">Moderate (3-5 days/week)</option>
            <option value="active">Active (6-7 days/week)</option>
            <option value="very_active">
              Very active (physical job or 2x/day)
            </option>
          </select>
        </label>

        <label className="flex flex-col gap-1 sm:col-span-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">Goal</span>
          <select
            className="border rounded px-3 py-2 bg-white text-gray-900 dark:bg-[#0b0b0b] dark:text-gray-100 dark:border-gray-700"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          >
            <option value="maintain">Maintain weight</option>
            <option value="lose">Lose ~0.5 kg/week</option>
            <option value="gain">Gain ~0.5 kg/week</option>
            <option value="extreme-lose">Aggressive loss (~1 kg/week)</option>
            <option value="extreme-gain">Aggressive gain (~1 kg/week)</option>
          </select>
        </label>
      </div>

      <div className="mt-6 p-4 border rounded bg-gray-50 dark:bg-[#0b0b0b] dark:border-gray-700">
        {result == null ? (
          <p className="text-gray-600 dark:text-gray-300">
            Enter your details to see your daily calories.
          </p>
        ) : (
          <p className="text-gray-900 dark:text-gray-100">
            Your daily calorie needs are approximately{" "}
            <span className="font-semibold">{result}</span> calories.
          </p>
        )}
      </div>
    </section>
  );
};

export default Calculator;
