import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (password) {
      const result = zxcvbn(password);
      setScore(result.score);
      setFeedback(result.feedback.warning || '');
      setSuggestions(result.feedback.suggestions || []);
    } else {
      setScore(0);
      setFeedback('');
      setSuggestions([]);
    }
  }, [password]);

  const getScoreColor = () => {
    switch (score) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-red-400';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-green-400';
      case 4: return 'bg-green-600';
      default: return 'bg-gray-200';
    }
  };

  const getScoreText = () => {
    switch (score) {
      case 0: return 'Very Weak';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Password Strength Analyzer</h2>
      
      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500"
            onClick={toggleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {password && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="text-sm font-medium text-gray-700 mr-2">Strength:</div>
            <div className="text-sm font-medium">{getScoreText()}</div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div 
              className={`h-2 rounded-full ${getScoreColor()}`} 
              style={{ width: `${(score + 1) * 20}%` }}
            />
          </div>
        </div>
      )}

      {feedback && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">{feedback}</p>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Suggestions for improvement:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="mb-1">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Password strength tips:</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600">
          <li className="mb-1">Use at least 12 characters</li>
          <li className="mb-1">Include uppercase and lowercase letters</li>
          <li className="mb-1">Add numbers and special characters</li>
          <li className="mb-1">Don't use common words or patterns</li>
          <li className="mb-1">Avoid personal information</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrength;