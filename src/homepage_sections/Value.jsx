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
            <div className='flex flex-col lg:flex-row '>
                {/* left section */}
                <div className='w-full px-10 sm:px-15  items-center' >
                    <div className='hidden  md:flex justify-center item-center w-full p-4'>
                        <img src="./value1.1.img.jpg" alt="" className='rounded-tl-[300px] rounded-tr-[300px]  py-4  sm:w-3/4' />
                    </div>

                </div>
                {/* right section */}
                <div className='w-full px-15 sm:pr-25  items-cente  '>
                    <div className='flex flex-col gap-3'>
                        <span className='text-orange-400 md:text-2xl'>Our Value</span>
                        <span className='text-[#121627] md:text-3xl font-bold'>Value we give to you</span>
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
                                                <AccordionItemButton>
                                                    <div className=' flex flex-row gap-5 md:gap-15 text-[#121627] md:text-2xl font-bold'>

                                                        <span>{item.heading}</span>

                                                        <span className='text-blue-500 '> {item.icon}</span>

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
