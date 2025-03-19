# Password Strength Analyzer

A web application that analyzes password strength and provides suggestions for improvement. This tool helps users create more secure passwords by providing real-time feedback on password quality.


## Features

- Real-time password strength analysis
- Visual strength indicator with color coding
- Actionable suggestions for improving password security
- Password visibility toggle
- Comprehensive security tips
- Responsive design for all devices
- Privacy-focused (passwords are never stored or transmitted)

## Live Demo

Check out the live application: [Password Strength Analyzer] https://password-strength-analyzer-zeta.vercel.app/

## Technology Stack

- **Frontend Framework**: Next.js
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Password Analysis**: zxcvbn library

## How It Works

The application uses the zxcvbn library, a sophisticated password strength estimator inspired by password crackers. It analyzes various factors including:

- Password length
- Character diversity (uppercase, lowercase, numbers, symbols)
- Common patterns and sequences
- Dictionary words and names
- Keyboard patterns

Based on this analysis, passwords are scored from 0 (very weak) to 4 (very strong), with appropriate feedback and suggestions provided.

## Local Development

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/AritraBug/password-strength-analyzer.git
   cd password-strength-analyzer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```
npm run build
npm run start
```

## Deployment

The application is deployed on Vercel. Any changes pushed to the main branch are automatically deployed.

## Security

- All password analysis happens client-side in the user's browser
- No passwords or password data are ever stored or transmitted
- No analytics or tracking cookies are used

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [zxcvbn](https://github.com/dropbox/zxcvbn) by Dropbox for the password strength estimation
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling