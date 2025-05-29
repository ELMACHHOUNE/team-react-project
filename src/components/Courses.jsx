// src/components/courses/CoursesSection.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Master’s in Computer Science",
    provider: "Woolf Institute of Malta",
    description:
      "An accredited program focused on modern software engineering and AI.",
  },
  {
    title: "Master’s in Data Science",
    provider: "Woolf Institute of Malta",
    description:
      "Learn machine learning, big data, and Python for real-world applications.",
  },
  {
    title: "Master’s in Blockchain Engineering",
    provider: "Woolf Institute of Malta",
    description:
      "Gain expertise in Web3, smart contracts, Solidity, and blockchain architecture.",
  },
  {
    title: "Master’s in Cybersecurity",
    provider: "Woolf Institute of Malta",
    description:
      "Train in digital security, ethical hacking, and advanced network defense.",
  },
  {
    title: "Master’s in AI & Robotics",
    provider: "Woolf Institute of Malta",
    description:
      "Specialize in robotic systems, deep learning, and intelligent automation.",
  },
  {
    title: "Master’s in Full-Stack Web Development",
    provider: "Woolf Institute of Malta",
    description:
      "Hands-on training in React, Node.js, databases, and deployment pipelines.",
  },
];
  

export default function Courses() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Our Courses</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardContent className="space-y-4">
              <CardTitle>{course.title}</CardTitle>
              <p className="text-muted-foreground">{course.provider}</p>
              <p>{course.description}</p>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
