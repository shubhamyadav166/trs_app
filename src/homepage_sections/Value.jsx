import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import 'react-accessible-accordion/dist/fancy-example.css';

import { data } from "../../utils/accordion"
const Value = () => {
    return (
        <section>
            <div className='flex flex-col justify-around md:flex-row  '>
                {/* left section */}
                <div className='w-full items-center bg-slate-50' >
                    <div className='hidden md:flex  md:justify-center md:items-center w-full h-full'>
                        <img src="./value1.1.img.jpg" alt="" className='rounded-tl-[300px] rounded-tr-[300px] md:w-1/2 lg:w-1/3 ' />
                    </div>
                </div>
                {/* right section */}
                <div className='w-full px-15 sm:pr-25  items-cente  '>
                    <div className='flex flex-col items-center gap-3'>
                        <span className='text-orange-500  md:text-3xl'>Our Value</span>
                        <span className='text-[#121627] text-2xl md:text-3xl font-bold'>Value we give to you</span>
                        <span className='text-slate-400'>here we are ready to provide you best service for you <br />
                            we beleave a good blece to live can make your life better
                        </span>
                        <Accordion
                            className='accordian'
                            allowMultipleExpanded={false}
                            preExpanded={[0]}
                        >

                            {
                                data.map((item, i) => (
                                    <Accordion key={i} allowZeroExpanded>
                                        <AccordionItem uuid={i} className="">

                                            <AccordionItemHeading>
                                                <AccordionItemButton className='accordion__button'>
                                                    <div className=' flex flex-row text-[#121627] lg:font-bold gap-3  lg:gap-5'>
                                                        <span className='text-blue-500 '> {item.icon}</span>
                                                        <span>{item.heading}</span>
                                                        <span><MdOutlineArrowDropDown /></span>


                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>{item.detail}</p>
                                            </AccordionItemPanel>

                                        </AccordionItem>
                                    </Accordion>
                                ))

                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Value
