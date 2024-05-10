import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const AnswerCard = ({ type }: { type: "men" | "women" }) => {
    console.log(type === 'men');

    return (
        <div className='bg-white rounded-3xl '>
            <div className='answer-top flex justify-between items-center py-4 px-6 rounded-t-3xl text-white'>
                <p className='font-medium'>Вопрос: 21408</p>
                <p className='font-medium'>Январь 27, 2024 9:41 pm</p>
            </div>
            <div className=' py-6 px-4'>
                <div className='flex items-start gap-3'>
                    <div className="answer-card p-4 bg-[#F8F8F8]">
                        <div className='flex justify-between'>
                            <p className='text-[#0129E3] text-sm'>Получено ответов (3)</p>
                            <p className='text-[#747474] font-medium'>{type === 'men' ? "Lorri Warf (26 лет)" : "Kimberly Mastrangelo (24 лет)"}</p>
                        </div>
                        <p className='w-full h-[1px] opacity-10 mt-2 mb-2 bg-[#747474]'></p>
                        <p className='font-medium text-sm'>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline *:decoration-solid text-[#747474] cursor-pointer'>Читать полностью</span></p>
                    </div>
                    {type === 'men' ? <img src="/men.svg" alt="men" /> : <img src="/women.svg" alt="women" />}
                </div>
                <div className='flex items-start gap-3 mt-5 mb-6'>
                    <img src="/doc.svg" alt="doc" />
                    <div className="answer-card-doc p-4 bg-[#0129E3]">
                        <div className='flex justify-between text-white'>
                            <p className='font-medium'>Mary Freund (Гастроинтеролог)</p>
                            <p className='font-medium'>Январь 28, 2024 9:41 pm</p>
                        </div>
                        <p className='w-full h-[1px] opacity-10 mt-2 mb-2 bg-[#fff]'></p>
                        <p className='font-medium text-sm text-white'>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline *:decoration-solid cursor-pointer'>Читать полностью</span></p>
                    </div>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="bg-[#F8F8F8] border-none text-center text-[#747474] rounded-xl">Смотреть все ответы (2)</AccordionTrigger>
                        <AccordionContent className="border-none">
                            <div className='flex items-start gap-3 mt-4'>
                                <div className="answer-card p-4 bg-[#F8F8F8]">
                                    <div className='flex justify-between'>
                                        <p className='text-[#0129E3] text-sm'>Получено ответов (3)</p>
                                        <p className='text-[#747474] font-medium'>{type === 'men' ? "Lorri Warf (26 лет)" : "Kimberly Mastrangelo (24 лет)"}</p>
                                    </div>
                                    <p className='w-full h-[1px] opacity-10 mt-2 mb-2 bg-[#747474]'></p>
                                    <p className='font-medium text-sm'>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline *:decoration-solid text-[#747474] cursor-pointer'>Читать полностью</span></p>
                                </div>
                                {type === 'men' ? <img src="/men.svg" alt="men" /> : <img src="/women.svg" alt="women" />}
                            </div>
                            <div className='flex items-start gap-3 mt-5'>
                                <img src="/doc.svg" alt="doc" />
                                <div className="answer-card-doc p-4 bg-[#0129E3]">
                                    <div className='flex justify-between text-white'>
                                        <p className='font-medium'>Mary Freund (Гастроинтеролог)</p>
                                        <p className='font-medium'>Январь 28, 2024 9:41 pm</p>
                                    </div>
                                    <p className='w-full h-[1px] opacity-10 mt-2 mb-2 bg-[#fff]'></p>
                                    <p className='font-medium text-sm text-white'>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline *:decoration-solid cursor-pointer'>Читать полностью</span></p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}

export default AnswerCard