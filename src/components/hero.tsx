import React from 'react'
import { Button } from './ui/button'
import { FormattedMessage } from 'react-intl';

const Hero = () => {
    return (
        <div className='hero rounded-3xl flex items-center justify-center flex-col'>
            <Button className='bg-transparent border rounded-[200px] p-3 px-5 border-slate-50 text-white' variant='outline'><FormattedMessage id='navbar.consultation' /></Button>
            <h1 className='text-white text-[55px] text-center font-medium max-w-[1038px]'><FormattedMessage id='hero.title' /></h1>
            <div className='flex gap-5 mt-16 mb-20 items-center justify-center'>
                <Button className='py-8 px-10 font-medium rounded-2xl flex items-center gap-3' variant={'secondary'}><img src='/star.svg' alt='star' /><FormattedMessage id='hero.bestConsultants' /></Button>
                <Button className='py-8 px-10 font-medium rounded-2xl flex items-center gap-3' variant={'secondary'}><img src='/question-circle.svg' alt='question' /><FormattedMessage id='hero.giveQuestion' /></Button>
                <Button className='py-8 px-10 font-medium rounded-2xl flex items-center gap-3' variant={'secondary'}><img src='/files-landscapes-alt.svg' alt='files' /><FormattedMessage id='hero.popularQuestion' /></Button>
            </div>
            <div className='flex gap-4'>
                <div className='border flex flex-col justify-center border-white bg-white bg-opacity-10 rounded-3xl py-6 px-8'>
                    <p className='text-white text-5xl font-medium'>+1 000</p>
                    <p className='text-white'><FormattedMessage id='hero.manyTypeJob' /></p>
                </div>
                <div className='border flex flex-col justify-center border-white bg-white bg-opacity-10 rounded-3xl py-6 px-8'>
                    <p className='text-white text-5xl font-medium'>24/7</p>
                    <p className='text-white'><FormattedMessage id='hero.useMedicine' /></p>
                </div>
                <div className='border flex flex-col justify-center border-white bg-white bg-opacity-10 rounded-3xl py-6 px-8'>
                    <p className='text-white text-5xl font-medium'>+ 95%</p>
                    <p className='text-white'><FormattedMessage id='hero.positiveFeedback' /></p>
                </div>
                <div className='border flex flex-col justify-center border-white bg-white bg-opacity-10 rounded-3xl py-6 px-8'>
                    <p className='text-white text-5xl font-medium'>+20 000</p>
                    <p className='text-white'><FormattedMessage id='hero.userProfiles' /></p>
                </div>
            </div>
        </div>
    )
}

export default Hero