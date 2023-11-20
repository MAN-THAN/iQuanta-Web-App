import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
    return (
        <Box width='52%' bg='#F1F2F3'>
            <InputGroup size="md" width='100%'>
            <InputLeftElement>
                <Search/>
            </InputLeftElement>
            <Input placeholder="Search" bg='#ffff' />
        </InputGroup>
        </Box>
    )
}

export default SearchInput