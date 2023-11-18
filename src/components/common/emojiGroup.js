import { Avatar, AvatarGroup } from '@chakra-ui/react'
import React from 'react'

const EmojiGroup = ({size}) => {
    return (
        <AvatarGroup size='' max={3}>
            <Avatar zIndex='1' bg='#fff' src='/Union.svg' />
            <Avatar zIndex='2' bg='#fff' src='UnionH.svg' />
            <Avatar zIndex='3' bg='#fff' src='/Smile.svg' />
        </AvatarGroup>
    )
}

export default EmojiGroup