import Section from "@/layouts/Section"
import Tools from "@/components/Tools"

function About() {
    return (
        <div>
            <Section id="about" className="bg-red-500 mb-28">
                <div className="space-y-10 text-gray-100 mb-44 text-center  w-3/4 mx-auto">
                    <h3 className="text-4xl ">Hi, I'm Ayoria. Nice to meet you.</h3>
                    <p>
                        I am a student who is about to finish his degree. During this time I have been developing many projects which have helped me create many projects using different tools. Like the following
                        I am a student who is about to finish his degree. During this time I have been developing many projects which have helped me create many projects using different tools. Like the following
                    </p>
                </div>
            </Section>
            <Tools />
        </div>
    )
}

export default About