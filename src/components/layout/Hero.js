import Image from 'next/image';
import { Right } from './icons/Right';
export const Hero = () => {
    return (
        <>
            <section className='hero'>
                
                <div className='w-100 h-full relative'>
                    <Image src="/pizza.png" alt="Pizza" width={400} height={300} />
                </div>
                <div className='flex flex-col justify-center p-10'>
                    <h1 className='text-4xl font-semibold'>
                        No estás en Nápoles, <br/>
                        pero es como si lo <br/>
                        estuvieras.
                    </h1>
                    <p className='my-4 text-gray-500 text-sm'>
                        Con una combinación de una buena masa napolitana,<br/>
                        salsa de tomate natural
                        y un buen queso muzzarella, <br/>
                        logramos la fórmula justa
                        para la felicidad
                    </p>
                    <div className='flex gap-6 text-sm'>
                        <button className='bg-primary uppercase text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 '>
                            Encargar <Right />
                        </button>
                        <button className='flex gap-2 py-2 text-gray-600 semibold'>
                            Saber más <Right />
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}