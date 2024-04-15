import React, {FormEvent, useRef, useState} from 'react';
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import {FaPhoneVolume, FaProjectDiagram, FaUser} from "react-icons/fa";
import ContactCard from "@/components/cards/contact"
import {MdEmail, MdSubject} from "react-icons/md";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Button from "@/components/ui/button";
import {SiMinutemailer} from "react-icons/si";
import SelectInput from "@/components/ui/select-input";
import emailjs from '@emailjs/browser';


const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null!);
    const btnRef = useRef<HTMLButtonElement>(null);

    const [services, setServices] = useState<string[]>([]);

    // const [budgets, setBudgets] = useState<string[]>([]);

    const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        emailjs
            .sendForm("service_1ku2j9w", "template_l30j4wx", formRef.current, {
                publicKey: 'tZD-w31-amaMnLN5E',
            })
            .then(
                (res) => {
                    console.log(res.text);
                    alert("Email sent successfully");
                },
                (error) => {
                    alert(error.text);
                }
            );
    };
    return (
        <div className="pt-24 px-3 lg:px-8">
            <Heading number={"04"} title_1="Contact" title_2={"Me"}/>
            <Card>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                    {/*Contact Cards*/}
                    <div className="flex flex-col gap-8">
                        <ContactCard
                            title={"Call us directly at"}
                            icon={<FaPhoneVolume className="fill-[#333] text-lg"/>}
                            text={"-"}
                            btnText={"Call us"}/>
                        <ContactCard
                            title={"Chat with us"}
                            icon={<MdEmail className="fill-[#333] text-lg"/>}
                            text={"leonlord0@gmail.com"}
                            btnText={"Email us"}/>
                    </div>
                    {/*Contact Form*/}

                    <form
                        className={"lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden px-[25px] py-5 shadow-md"}
                        ref={formRef}
                        onSubmit={sendEmail}

                    >

                        <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
                            <Input name="name" type="text" placeholder={"Full name"} icon={<FaUser/>}/>
                            <Input name="email" type="email" placeholder={"Email Address"} icon={<MdEmail/>}/>

                        </div>
                        <div className="flex  items-center justify-between mb-4 gap-8">
                            <Input name="subject" type="text" placeholder={"Subject"} icon={<MdSubject/>}/>
                        </div>
                        {/*Multiple select wrapper*/}
                        <div className="flex flex-col gap-6">

                            <div className={"space-y-6"}><h1 className={"font-bold text-lg"}>What services are you in
                                need for ?</h1>
                                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                                    {/*services*/}
                                    {servicesOptions.map((service) => (
                                        <SelectInput
                                            key={service.id}
                                            type="checkbox"
                                            id={service.id}
                                            text={service.text}
                                            selectedOptions={services}
                                            setSelectedOptions={setServices}
                                            allowMultiple
                                        />
                                    ))}

                                </div>
                            </div>
                        </div>
                        {/*Budget*/}
                        {/*<div className="flex flex-col gap-6">*/}
                        {/*    <div><h1 className={"font-bold text-lg"}>What is your budget ?</h1>*/}
                        {/*        <div className="flex flex-wrap item-center justify-between mb-4 gap-8">*/}
                        {/*            /!*Budget Options*!/*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*    TextArea message*/}
                        <TextArea
                            name="message"
                            placeholder="Tell us about your project"
                            icon={<FaProjectDiagram />}
                        />
                        <div className="w-full flex justify-end">
                            <div onClick={() => btnRef.current?.click()}>
                                <Button className="!w-44 !py-3 !text-xl">
                                    Send <SiMinutemailer />
                                </Button>
                            </div>
                            {/*Hidden services and budget inputs*/}
                            <div className="hidden">
                                <input
                                    type="text"
                                    value={services.join(", ")}
                                    name="services"
                                    hidden
                                />
                            </div>
                            <button type="submit" hidden ref={btnRef}></button>
                        </div>
                    </form>
                </div>
            </Card>

        </div>
    );
};

export default ContactSection;

const servicesOptions = [
    {
        id: "Software Testing",
        text:
            "Software Testing",
    },
    {
        id: "Web Development",
        text: "Web Development",
    },
    {
        id: "Web Design",
        text: "Web Design",
    },

    {
        id: "Back-end",
        text: "Back-end",
    },

    {
        id: "1 On 1 Teaching",
        text: "1 On 1 Teaching",
    },
];

// const budgetsOptions = [
//     {
//         id: "less than 500$",
//         text: "< $500",
//     },
//     {
//         id: "between 500$ and 2000$",
//         text: "$500 - $2000",
//     },
//     {
//         id: "between 2000$ and 5000$",
//         text: "$2000 - $5000",
//     },
//     {
//         id: "more than 5000$",
//         text: "> $5000",
//     },
// ];