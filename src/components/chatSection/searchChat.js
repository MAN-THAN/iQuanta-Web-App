import React, { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Image,
  Text,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon, X } from 'lucide-react';


const SearchWithSuggestions = () => {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestionData = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  const filteredSuggestions = suggestionData.filter((suggestion) =>
    suggestion.toLowerCase().includes(value.toLowerCase())
  );

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestions(false);
    // Handle the selected suggestion (e.g., navigate to a page)
    console.log('Selected suggestion:', suggestion);
  };

  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          pl="3.0rem"
          placeholder="Search"
          value={value}
          onChange={handleInputChange}
        />
      </InputGroup>
      <Popover isOpen={showSuggestions} placement="bottom-start">
        <PopoverTrigger>
          <div style={{ width: '100%', height: '0', overflow: 'hidden' }} />
        </PopoverTrigger>
        <PopoverContent bg='white.900' width="300px">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Search Suggestions</PopoverHeader>
          <PopoverBody>
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion) => (
                <>
                  <Box
                    key={suggestion}
                    cursor="pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                    padding={4}
                  >
                    <Flex justifyContent="space-between" align="center">
                      <Box display="flex" alignItems="center">
                        <Image
                          boxSize="2.5rem"
                          rounded="full"
                          src="https://placekitten.com/100/100"
                          alt="Kitten"
                          mr="12px"
                        />
                        <Text fontSize="16px" color="#171717">
                          {suggestion}
                        </Text>
                      </Box>
                      <X/>
                    </Flex>
                  </Box>
                  <Divider />
                </>
              ))
            ) : (
              <Text>No suggestions found</Text>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default SearchWithSuggestions;
