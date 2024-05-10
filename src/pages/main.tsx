import Answers from '@/components/answers'
import Filter from '@/components/filter'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import React from 'react'

const Main = () => {
    return (
        <Layout>
            <Hero />
            <div className='flex mt-20 gap-5 items-start'>
                <Filter />
                <Answers />
            </div>
        </Layout>
    )
}

export default Main