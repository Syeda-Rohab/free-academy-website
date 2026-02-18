'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/stores/progress';
import { useOfflineSync } from '@/hooks/useOfflineSync';
import SyncStatus from './SyncStatus';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  courseId: string;
  chapterId: string;
  userId: string;
  quizQuestions?: QuizQuestion[];
  onComplete?: () => void;
}

const QuizComponent: React.FC<QuizProps> = ({ courseId, chapterId, userId, quizQuestions: propQuestions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const { updateProgress } = useProgressStore();
  const { queueOperation, syncIfOnline } = useOfflineSync();

  const questions = propQuestions;

  if (!questions) {
    return (
      <div className="text-center py-8 text-gray-400">
        Quiz data not available
      </div>
    );
  }

  if (selectedAnswers.length !== questions.length) {
    setSelectedAnswers(Array(questions.length).fill(null));
  }

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / questions.length) * 100);

    const progressData = {
      id: `progress-${userId}-${courseId}-${chapterId}`,
      userId,
      courseId,
      chapterId,
      course: courseId,
      chapter: 0,
      score,
      completed: true,
      timestamp: Date.now(),
      pendingSync: true,
      syncAttempts: 0
    };

    try {
      await updateProgress(progressData);
      await queueOperation({
        id: progressData.id,
        type: 'UPDATE',
        payload: progressData,
        timestamp: Date.now()
      });
      syncIfOnline();
      setQuizCompleted(true);
      setShowResults(true);
      onComplete?.();
    } catch (error) {
      console.error('Error saving quiz progress:', error);
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  if (quizCompleted && showResults) {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / questions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 rounded-2xl text-center"
      >
        <div className="mb-6">
          {score >= 80 ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-8xl mb-4"
            >
              🏆
            </motion.div>
          ) : score >= 60 ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-8xl mb-4"
            >
              ⭐
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-8xl mb-4"
            >
              📚
            </motion.div>
          )}
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-6">Quiz Results</h2>
        
        <div className="bg-white/10 rounded-2xl p-8 mb-6">
          <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {score}%
          </div>
          <p className="text-xl text-gray-300 mb-2">
            You answered <strong className="text-white">{correctAnswers}</strong> out of{' '}
            <strong className="text-white">{questions.length}</strong> questions correctly
          </p>
          <div className={`inline-block px-6 py-3 rounded-full font-bold text-lg ${
            score >= 80 ? 'bg-green-500/20 text-green-400' : 
            score >= 60 ? 'bg-yellow-500/20 text-yellow-400' : 
            'bg-red-500/20 text-red-400'
          }`}>
            {score >= 80 ? 'Excellent!' : score >= 60 ? 'Good Job!' : 'Keep Practicing!'}
          </div>
        </div>

        <div className="mb-6">
          <SyncStatus />
        </div>

        <p className="text-gray-400">
          Your progress has been saved and will sync when online
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 rounded-2xl"
    >
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-2xl font-bold text-white mb-8">
        {currentQuestion.question}
      </h3>

      {/* Options */}
      <div className="space-y-4 mb-8">
        {currentQuestion.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswerSelect(index)}
            className={`w-full text-left p-5 rounded-xl transition-all duration-300 border-2 ${
              selectedAnswer === index
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-400 text-white shadow-lg'
                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                selectedAnswer === index
                  ? 'bg-white/20'
                  : 'bg-white/10'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-lg">{option}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${
            currentQuestionIndex > 0
              ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg'
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-4">
          <SyncStatus />
          
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={goToNextQuestion}
              disabled={selectedAnswer === null}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${
                selectedAnswer !== null
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              disabled={selectedAnswers.includes(null)}
              className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold transition-all ${
                !selectedAnswers.includes(null)
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:scale-105'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send className="h-5 w-5" />
              <span>Submit Quiz</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default QuizComponent;
