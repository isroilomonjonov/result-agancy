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
                                <li><a href="#" className='text-[#0129E3] text-xl hover:underline'>Медицинская консультация</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Справочник лекарств</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Справочник болезней</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Справочник лекарств</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Справочник Врачей и Клиник</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[#F8F8F8]'>Выполнить</p>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="#" className='text-xl hover:underline'>Задать вопрос</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Лучшие консультанты</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Популярные вопросы</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Регистрация</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Вход в личный кабинет</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[#F8F8F8]'>Проект</p>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="#" className='text-xl hover:underline'>Информация о проекте</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Сотрудничество</a></li>
                                <li><a href="#" className='text-xl hover:underline'>Контакты для связи</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='bg-white opacity-10 w-full h-[1px] mt-20'></p>
                <div className='grid grid-cols-3 justify-items-center mt-7'>
                    <p className='justify-self-start'><a href="#" className="hover:underline">MedYordam 2024 - Все права защищены</a></p>
                    <p><a href="#" className="hover:underline">Обработка данных</a></p>
                    <p className='justify-self-end'><a href="#" className="hover:underline">Условия использования</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer