import React, { useState } from "react";
import { Box, Input, Button, Text, Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Plus, X } from "lucide-react";

const PollInputs = ({inputFields, setInputFields}) => {
  // const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

  const handleAddField = () => {
    if (inputFields.length < 5) {
      const newInputFields = [...inputFields, { title : "", votes : 0, id : Date.now() }];
      setInputFields(newInputFields);
    } else {
      console.log("Maximum number of fields reached (5)");
    }
  };

  const handleRemoveField = (id) => {
    const updatedInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(updatedInputFields);
  };

  const handleChange = (id, title) => {
    const updatedInputFields = inputFields.map((field) => (field.id === id ? { ...field, title } : field));
    setInputFields(updatedInputFields);
  };

  return (
    <>
      <Box px="4">
        {inputFields.map((field) => (
          <Box key={field.id} display="flex" alignItems="center" pb="2">
            <Input placeholder="Option " value={field.title} onChange={(e) => handleChange(field.id, e.target.value)} />
            {inputFields.length > 1 && <X onClick={() => handleRemoveField(field.id)} style={{ cursor: "pointer" }} />}
          </Box>
        ))}
      </Box>
      <Flex px="4" align="center" justify="space-between">
        <Button bg="transparent" border="1px solid #8D96A5" rounded="lg" p="2" onClick={handleAddField}>
          <Box display="flex" alignItems="center">
            <Text fontSize="14px">Add Option</Text>
            <Plus size="14px" />
          </Box>
        </Button>
        <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0" fontSize="14px">
              Allow others to add options
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
        </Box>
      </Flex>
    </>
  );
};

export default PollInputs;
