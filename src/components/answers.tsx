import { Button } from './ui/button'
import { Input } from './ui/input'
import AnswerCard from './answer'
import PaginationComponent from './pagination'

const Answers = () => {
    return (
        <div className='w-full'>
            <div className='flex items-end justify-between'>
                <h2 className='text-5xl font-medium'>Список последних ответов <br /> на вопросы <span className='text-[#747474]'>(12 493)</span></h2>
                <Button variant={'secondary'} className='bg-white flex gap-2 text-[#747474] py-5 px-10'><img src="/sort-amount-up.svg" alt="sort" /> Сортировать по</Button>
            </div>
            <div className='flex gap-2 mt-9'>
                <Input className='py-7 px-5 border-none rounded-2xl' type='search' placeholder='Искать по тексту в вопросе' />
                <Button variant={'default'} className='flex gap-3 py-7 px-14 text-white bg-[#0129E3] rounded-2xl'><img src="/search-white.svg" alt="search" /> Поиск</Button>
            </div>
            <div className='mt-9 flex flex-col gap-10 mb-40'>
                <AnswerCard type='men' />
                <AnswerCard type='women' />
                <AnswerCard type='men' />
                <AnswerCard type='women' />
                <PaginationComponent />
            </div>
        </div>
    )
}

export default Answers