import React from 'react';
import Card from "@/components/ui/card";

const BackgroundCard = () => {
    return (
        <Card className="md:h-fit" title="My Background">

            <div>
                <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
                    Currently working in software quality assurance and development, I am a
                    <span className="text-white underline"> Computer Science graduate</span> with hands-on experience in
                    all levels of
                    coding, including <span
                    className="text-white underline">Front-end Development</span>, and
                    <span className="text-white underline">Web Development</span>. Proficient in <span
                    className="text-white underline">Django ,DjangoRestAPI, MySQL and Postgresql</span> for back-end development, and
                    experienced in <span className="text-white underline">API testing using Postman</span>.<br/><br/>

                    My technical skills are broad and include:
                    <ul>
                        <li><span className="text-white">Advanced proficiency in programming languages</span> such as
                            Java, Python, HTML, CSS, SQL,TypeScript and JavaScript.
                        </li>
                        <li><span className="text-white">Comprehensive understanding of front-end and back-end technologies</span>.
                        </li>
                        <li><span
                            className="text-white">Expertise in web application testing</span>.
                        </li>
                        <li><span
                            className="text-white">Proficient in Python web scraping and crawling techniques</span>.
                        </li>
                        <li><span className="text-white">Data analytics with Excel and database modeling</span>.</li>
                    </ul><br/>


                    <span className="text-white">Contact Information:</span><br/>
                    Email: <a href="mailto:leonlord0@gmail.com" className="text-white underline">leonlord0@gmail.com</a><br/>
                    <span className="text-white">Location:</span> Giza, Egypt<br/>
                    <br/><br/>

                    <span className="text-white underline">Education:</span> Faculty of Computer and Artificial
                    Intelligence, Cairo University (2019-2023) - Graduated with an A+ in Graduation Project.<br/><br/>
                    <span className="text-white italic">I am eager to apply my skills in dynamic environments where I can contribute to impactful projects and continuously improve and expand my capabilities in the field of technology.</span><br/><br/>
                </p>

            </div>

        </Card>
    );
};

export default BackgroundCard;