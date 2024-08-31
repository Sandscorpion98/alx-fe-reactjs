module.exports = {
    
    coverageDirectory: 'coverage',
  
    
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    
    testEnvironment: 'jsdom',
  
   
    testPathIgnorePatterns: ['/node_modules/'],
  
    
    preset: 'react',
  
    
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
  
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  };
  