import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Anushka Singh Raghuvanshi
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Education
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:anushkasinghraghuvanshi88@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="default" asChild className="hidden md:flex">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Anushka</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                A passionate Computer Science Engineering student with expertise in Java, and Data Structures
                and Algorithms.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Anushka Singh Raghuvanshi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground mb-4">
                Results-oriented third year computer science student at Lovely Professional University, proficient in
                Java, Python and Data Structures and Algorithms. Seeking opportunities to apply my skills in building
                innovative solutions and contributing to impactful projects.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Known for a strong foundation in database management system, operating systems and computer networks, a
                commitment to staying abreast of emerging technologies, and a collaborative approach to problem-solving.
              </p>
              <p className="text-lg text-muted-foreground">
                I'm passionate about technology and continuously expanding my knowledge in various domains of computer
                science.
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium">Location:</span>
                      <p className="text-muted-foreground">Jalandhar, India</p>
                    </div>
                    <div>
                      <span className="font-medium">Education:</span>
                      <p className="text-muted-foreground">B.Tech in CSE, Lovely Professional University</p>
                    </div>
                    <div>
                      <span className="font-medium">Languages:</span>
                      <p className="text-muted-foreground">English (Professional), Hindi (Native)</p>
                    </div>
                    <div>
                      <span className="font-medium">Email:</span>
                      <p className="text-muted-foreground">anushkasinghraghuvanshi88@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container py-16 md:py-24 bg-muted/50">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Volunteer Educator</h3>
                    <p className="text-primary font-medium">Kashi Educare Society</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-muted-foreground">June 2023 - July 2023</div>
                </div>
                <ul className="text-muted-foreground mb-4 list-disc pl-5 space-y-2">
                  <li>Taught underprivileged children, enhancing their literacy and numeracy skills.</li>
                  <li>Distributed free books and notebooks to ensure students had necessary supplies.</li>
                  <li>Raised awareness about education, increasing student enrolment and participation.</li>
                  <li>Helped design and implement an engaging, supportive curriculum.</li>
                  <li>Worked with volunteers to organize events, fostering a motivating learning environment.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge>Teaching</Badge>
                  <Badge>Community Outreach</Badge>
                  <Badge>Curriculum Development</Badge>
                  <Badge>Team Collaboration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {/* Education Item 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h3>
                    <p className="text-primary font-medium">Lovely Professional University, Punjab, India</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-muted-foreground">2022 - 2026</div>
                </div>
                <p className="text-muted-foreground">CGPA: 7.1</p>
              </CardContent>
            </Card>

            {/* Education Item 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Intermediate</h3>
                    <p className="text-primary font-medium">Asian Public School, India</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-muted-foreground">2020 - 2021</div>
                </div>
                <p className="text-muted-foreground">Percentage: 74%</p>
              </CardContent>
            </Card>

            {/* Education Item 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">High School</h3>
                    <p className="text-primary font-medium">Gyandeep English School, India</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-muted-foreground">2018 - 2019</div>
                </div>
                <p className="text-muted-foreground">Percentage: 83%</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-16 md:py-24 bg-muted/50">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">Java</Badge>
                  <Badge className="px-3 py-1">Python</Badge>
                  <Badge className="px-3 py-1">C++</Badge>
                  <Badge className="px-3 py-1">C</Badge>
                  <Badge className="px-3 py-1">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skill Category 2 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">HTML</Badge>
                  <Badge className="px-3 py-1">CSS</Badge>
                  <Badge className="px-3 py-1">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skill Category 3 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Database & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">MySQL</Badge>
                  <Badge className="px-3 py-1">AWS</Badge>
                  <Badge className="px-3 py-1">Database Management</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skill Category 4 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Computer Science</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">Data Structures</Badge>
                  <Badge className="px-3 py-1">Algorithms</Badge>
                  <Badge className="px-3 py-1">Operating Systems</Badge>
                  <Badge className="px-3 py-1">Computer Networks</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skill Category 5 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">Linux</Badge>
                  <Badge className="px-3 py-1">AWS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skill Category 6 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">English (Professional)</Badge>
                  <Badge className="px-3 py-1">Hindi (Native)</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Data Structures and Algorithms</h3>
                <p className="text-primary font-medium mb-2">GeeksforGeeks</p>
              </CardContent>
            </Card>

            {/* Certification 2 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">AWS Academy Cloud Foundations</h3>
                <p className="text-primary font-medium mb-2">AWS Academy</p>
              </CardContent>
            </Card>

            {/* Certification 3 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">AWS Academy Cloud Architecture</h3>
                <p className="text-primary font-medium mb-2">AWS Academy</p>
              </CardContent>
            </Card>

            {/* Certification 4 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Responsible & Safe AI Systems</h3>
                <p className="text-primary font-medium mb-2">NPTEL</p>
              </CardContent>
            </Card>

            {/* Certification 5 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Machine Learning for All</h3>
                <p className="text-primary font-medium mb-2">University of London</p>
              </CardContent>
            </Card>

            {/* Certification 6 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Design Analysis and Algorithm</h3>
                <p className="text-primary font-medium mb-2">University of California San Diego</p>
              </CardContent>
            </Card>

            {/* Certification 7 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Introduction to Gen AI</h3>
                <p className="text-primary font-medium mb-2">Google Cloud</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-16 md:py-24 bg-muted/50">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Educational Website"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Educational Website</h3>
                <p className="text-muted-foreground mb-4">
                  Created an educational website using HTML and CSS, providing accessible learning resources. Ensured
                  the website's functionality and visual appeal across different devices by implementing responsive
                  design principles. Structured and managed educational content effectively, enhancing the accessibility
                  and usability of information for users.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">Responsive Design</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-4">Sep 2022 - Aug 2022</div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=192&width=384" alt="ATM Project" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">ATM Project</h3>
                <p className="text-muted-foreground mb-4">
                  Developed an ATM system using Python, enabling users to perform banking operations such as balance
                  inquiry, deposits, withdrawals, and fund transfers with a secure login system. Implemented error
                  handling and user input validation to ensure reliable and accurate transaction processing, enhancing
                  the overall user experience and system integrity. Integrated file handling for transaction history
                  recording and account data management, improving data persistence and auditability of financial
                  activities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">File Handling</Badge>
                  <Badge variant="outline">Error Handling</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-4">Aug 2022 - Oct 2022</div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="DSA Travel Planner"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">DSA based Travel Planner</h3>
                <p className="text-muted-foreground mb-4">
                  Completed 60+ hours course from GeeksForGeeks on Data Structures and Algorithms. Implemented Travel
                  Planner project using Java which majorly implemented Graph data structures and Dijkstra's Algorithm.
                  Gained knowledge on several key concepts e.g., Hashing, Dynamic Programming, Trees, and Strings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">DSA</Badge>
                  <Badge variant="outline">Graph Algorithms</Badge>
                  <Badge variant="outline">Dijkstra's Algorithm</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-4">May 2024 - Jul 2024</div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=192&width=384" alt="Car Rental" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Car Rental System</h3>
                <p className="text-muted-foreground mb-4">
                  Developed a console-based Car Rental System in Java, applying OOP principles such as encapsulation and
                  abstraction. Designed and managed car rental, customer, and rental transactions using Java Collections
                  (ArrayLists). Implemented a rental process, allowing users to rent and return cars with rental pricing
                  calculations. Built an interactive menu-driven interface for seamless user experience. Utilized
                  exception handling and input validation to enhance system reliability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">OOP</Badge>
                  <Badge variant="outline">Collections</Badge>
                  <Badge variant="outline">Exception Handling</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-4">Jan 2025 - Feb 2025</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hackathon – IdeaHub 2.0</h3>
                <p className="text-primary font-medium mb-2">Winner</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-16 md:py-24 bg-muted/50">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:anushkasinghraghuvanshi88@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      anushkasinghraghuvanshi88@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-primary" />
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Twitter Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Anushka Singh Raghuvanshi. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
