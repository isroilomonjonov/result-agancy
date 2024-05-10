const Footer = () => {
    return (
        <div className='py-20 px-24 bg-[rgb(5,11,43)] text-white'>
            <div className='container'>
                <div className='flex gap-32'>
                    <div>
                        <img className='max-w-96 mb-5' src="/logo-white.svg" alt="logo" />
                        <p className='text-[#F8F8F8]'>Консультация от врачей</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[#F8F8F8]'>Каталог услуг</p>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="#" className='text-[#0129E3] text-xl'>Медицинская консультация</a></li>
                                <li><a href="#" className='text-xl'>Справочник лекарств</a></li>
                                <li><a href="#" className='text-xl'>Справочник болезней</a></li>
                                <li><a href="#" className='text-xl'>Справочник лекарств</a></li>
                                <li><a href="#" className='text-xl'>Справочник Врачей и Клиник</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[#F8F8F8]'>Выполнить</p>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="#" className='text-xl'>Задать вопрос</a></li>
                                <li><a href="#" className='text-xl'>Лучшие консультанты</a></li>
                                <li><a href="#" className='text-xl'>Популярные вопросы</a></li>
                                <li><a href="#" className='text-xl'>Регистрация</a></li>
                                <li><a href="#" className='text-xl'>Вход в личный кабинет</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[#F8F8F8]'>Проект</p>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="#" className='text-xl'>Информация о проекте</a></li>
                                <li><a href="#" className='text-xl'>Сотрудничество</a></li>
                                <li><a href="#" className='text-xl'>Контакты для связи</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='bg-white opacity-10 w-full h-[1px] mt-20'></p>
                <div className='grid grid-cols-3 justify-items-center mt-7'>
                    <p className='justify-self-start'><a href="#">MedYordam 2024 - Все права защищены</a></p>
                    <p><a href="#">Обработка данных</a></p>
                    <p className='justify-self-end'><a href="#">Условия использования</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer