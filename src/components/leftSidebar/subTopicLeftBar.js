import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react"

const SubTopicLeftBar = () => {

    const subTopicNavs = [
        {
            title: "1. Introduction"
        },
        {
            title: "2. Unnecessary Sentences"
        },
        {
            title: "3. Avoid Clichés"
        },
        {
           title :"4. Verb and Tense"
        },
        {
            title :"5. Modifiers"
         },
         {
            title :"6. Idioms"
         },
         {
            title :"7. Parallelism"
         },
         {
            title :"8. Comparison"
         },
         {
            title :"9. Inference"
         },
         {
            title :"10. Assumption"
         },
         {
            title :"11. Evaluate"
         },
         {
            title :"12. Strengthen & Weaken"
         },
         
    ]




    return (
        <>

            <UnorderedList styleType='none'>
                {subTopicNavs.map((data, index) => {
                    return (
                        <ListItem key={index} _hover={{ color: "#000", }} cursor='pointer' className="flex" p='3' fontSize='14px' fontWeight="semibold">
                            <p>{data.title}</p>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </>
    )
}

export default SubTopicLeftBar