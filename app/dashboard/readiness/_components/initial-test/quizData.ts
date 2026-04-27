"use client";

export interface Question {
  id: number;
  category: "Data Analysis" | "Design Brief" | "Problem Solving" | "Web Development";
  question: string;
  type: string;
  options: { id: string; text: string }[];
  correctOption: string;
}

export const sections = [
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Analyze data patterns and demonstrate practical skills",
    tasks: 4,
    color: "blue",
  },
  {
    id: "design-brief",
    name: "Design Brief",
    description: "Demonstrate your design thinking and visual problem-solving",
    tasks: 3,
    color: "purple",
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    description: "Test your algorithmic thinking and logical reasoning",
    tasks: 3,
    color: "emerald",
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Assess your frontend and backend engineering skills",
    tasks: 3,
    color: "orange",
  },
];

export const quizQuestions: Question[] = [
  {
    id: 1,
    category: "Data Analysis",
    type: "Multiple Choice",
    question: "You're given a dataset with 10,000 rows and notice that 15% of entries in the 'income' column are missing. Which approach is most appropriate before building a predictive model?",
    options: [
      { id: "A", text: "Delete all rows with missing income values" },
      { id: "B", text: "Fill missing values with the column mean after checking the missing data pattern" },
      { id: "C", text: "Replace missing values with zero" },
      { id: "D", text: "Ignore the missing values as 15% is a small amount" },
    ],
    correctOption: "B",
  },
  {
    id: 2,
    category: "Design Brief",
    type: "Multiple Choice",
    question: "A client needs a dashboard for monitoring real-time IoT sensor data. Which layout approach best supports quick scanning of critical metrics?",
    options: [
      { id: "A", text: "Single long scrollable page with all data points" },
      { id: "B", text: "Card-based grid layout with status indicators and progressive disclosure" },
      { id: "C", text: "Multi-tab interface with each sensor on a separate tab" },
      { id: "D", text: "Nested accordion menus for each sensor category" },
    ],
    correctOption: "B",
  },
  {
    id: 3,
    category: "Problem Solving",
    type: "Multiple Choice",
    question: "You need to find duplicates in an array of 1 million integers. Which approach gives the best time complexity?",
    options: [
      { id: "A", text: "Nested loops comparing each pair — O(n²)" },
      { id: "B", text: "Sort the array first, then check adjacent elements — O(n log n)" },
      { id: "C", text: "Use a Hash Set to track seen elements — O(n)" },
      { id: "D", text: "Recursive binary search — O(log n)" },
    ],
    correctOption: "C",
  },
  {
    id: 4,
    category: "Web Development",
    type: "Multiple Choice",
    question: "In React, what is the primary purpose of the useEffect hook?",
    options: [
      { id: "A", text: "To create state variables in a component" },
      { id: "B", text: "To perform side effects like data fetching or subscriptions" },
      { id: "C", text: "To optimize rendering performance with memoization" },
      { id: "D", text: "To define event handlers for user interactions" },
    ],
    correctOption: "B",
  },
];
