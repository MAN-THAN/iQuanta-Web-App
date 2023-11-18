import CoursesAdd from '@/components/courses/courseAdd'
import YourExam from '@/components/exams/yourExam'
import MyNotes from '@/components/learnAndClass/myNotes'

const LearnClass = () => {
    return (
        <div >
            <CoursesAdd />
            <YourExam />
            <MyNotes/>
        </div>
    )
}

export default LearnClass