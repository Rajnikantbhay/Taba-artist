import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

function Catalog() {
  return (
    <section className="md:px-12 md:py-12 bg-black text-white w-full">
        <h1 className="text-left mb-12 font-nosifer md:text-5xl text-3xl tracking-wide">OUR <br className='md:hidden block'/> PROJECTS</h1>
        <div className="flex h-64 mb-20 border border-whit">
            <div className='w-3/5 h-full'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fcarousel3.webp?alt=media&token=fc83739c-653b-4442-ac42-f8926bb387ca'} className="h-full w-full object-cover" alt="" />
            </div>
            <div className="flex-1 text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                <div className="text-left md:mt-8 md:ml-8">
                    <h2 className="uppercase text-3xl font-bold mb-2 md:tracking-wide font-nosifer ">Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum in eaque non aut aliquid illo perferendis, eum iure eos quaerat minus deserunt alias molestias ratione veniam, vitae tempora natus.</p>
                </div>
            </div>
        </div>
    
        <div className="flex h-64 border border-white">
        <div className='w-3/5 h-full linear-gradient(to top right, var(--tw-gradient-stops))'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fcarousel3.webp?alt=media&token=fc83739c-653b-4442-ac42-f8926bb387ca'} className="h-full w-full object-cover " alt="" />
            </div>
        <div className="flex-1 text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                <div className="text-left md:mt-8 md:ml-8">
                    <h2 className="uppercase text-3xl font-bold mb-2 md:tracking-wide font-nosifer">Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, numquam. Odio sint et magni quo, cumque iusto, dolore nostrum quod laborum recusandae delectus doloribus veritatis vero ipsum laudantium, nemo dolor?</p>
                    
                </div>
            </div>
           
            
        </div>
    </section>
  );
}

export default Catalog;