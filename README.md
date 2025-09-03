# webcrawlerhttp

## Getting Started

### Prerequisites

- Git
- Node.js (version 22.19.0 recommended)
- npm

### Installation

1. Clone the project using the command:
   ```
   git clone https://github.com/dev-jerin/webcrawlerhttp.git
   ```

2. Navigate to the project directory:
   ```
   cd webcrawlerhttp
   ```

3. Add a file named `.nvmrc` and type `22.19.0` in it.

4. In the terminal, type:
   ```
   nvm install
   ```

5. Check nvm version:
   ```
   nvm --version
   ```

6. If Node.js version is already installed, select that version using:
   ```
   nvm use
   ```

7. In the terminal, run:
   ```
   npm init
   ```

8. The `package.json` should have the following scripts:
   - ADD `"start": "node main.js"`
   - UPDATE`"test": "jest"`

9. Install Jest as a dev dependency (if not already installed):
   ```
   npm install --save-dev jest
   ```

### Usage

To start the web crawler, run:
```
npm start <url>
```

Replace `<url>` with the website URL you want to crawl.
