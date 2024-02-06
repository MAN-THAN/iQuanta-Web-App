// eslint-disable-next-line import/no-anonymous-default-export
export default {
  control: {
    backgroundColor: '#f0f0f0',
    fontSize: 16,
    borderRadius: 8,
    border: '2px solid #dcdcdc',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#a0a0a0',
    },
  },
  '&multiLine': {
    control: {
      fontFamily: 'Arial, sans-serif',
      minHeight: 100,
    },
    highlighter: {
      padding: 12,
      border: '1px solid transparent',
    },
    input: {
      padding: 12,
      border: '1px solid #a0a0a0',
    },
  },
  '&singleLine': {
    display: 'inline-block',
    width: '100%',
    highlighter: {
      padding: 8,
      border: '2px solid transparent',
    },
    input: {
      padding: 8,
      border: '2px solid #3498db',
      borderRadius: 4,
    },
  },
  suggestions: {
    list: {
      backgroundColor: 'white',
      border: '1px solid #dcdcdc',
      fontSize: 16,
      borderRadius: 8,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    item: {
      padding: '10px 15px',
      borderBottom: '1px solid #dcdcdc',
      '&focused': {
        backgroundColor: '#f5f5f5',
      },
    },
  },
};
