"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper"
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import {GoHomeFill} from "react-icons/go";
import {FaArrowRight, FaUser} from "react-icons/fa";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wapper";
import ScrollDown from "@/components/ui/scroll-down";


export default function Home() {
    return (

        // <h1 className="text-4xl text-white">Hello my friends</h1>
        // <h1 className="text-4xl text-white font-oswald">Hello my friends</h1>
        // <h1 className="text-4xl text-white font-pixel">Hello my friends</h1>
        // <div className="link text-white text-xl bg-red-500">Hover here</div>
        <WaterWaveWrapper imageUrl=""
                          dropRadius="3"
                          perturbance="3"
                          resolution="2048">{() => (
            <div className="w-full p-10">
                <div className="max-w-2xl mx-auto">
                    <Card title="Ui Components">
                        <div className="grid grid-cols-4">
                            <Button>Basic Button</Button>
                            {/*<br/>*/}
                            <Button><GoHomeFill/>Basic Button</Button>
                            {/*<br/>*/}
                            <Button isIcon><FaUser/></Button>
                            {/*<br/>*/}
                            <Button link="https://www.google.com">Google</Button>

                        </div>
                        <Input type="text" placeholder="Full Name"></Input>
                        <Input type="text" placeholder="Full Name" icon={<FaUser/>}></Input>
                        <TextArea placeholder="Full Name"></TextArea>
                        <TextArea placeholder="Full Name" icon={<FaUser/>}></TextArea>
                        <Profile/>
                        <MagneticWrapper className="[w-350px]"><FancyButton text="Contact us"
                                                                            icon={<FaArrowRight/>}/></MagneticWrapper>
                        <LiveClock timeZone="Egypt/Giza"/>
                        <MagneticWrapper className=" inset-0 m-auto "><ScrollDown/></MagneticWrapper>
                    </Card>
                </div>
            </div>)}
        </WaterWaveWrapper>
    );
}
