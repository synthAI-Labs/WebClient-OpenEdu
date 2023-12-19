import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const CourseCard: React.FC = () => {
    return (
        <Card>
            <CardHeader >title</CardHeader>
            <CardContent >Image</CardContent>
            <CardFooter>Progress Bar</CardFooter>
        </Card>
    )
}

export default CourseCard